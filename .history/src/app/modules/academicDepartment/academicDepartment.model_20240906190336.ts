import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import AppError from '../../error/appError';
import httpStatus from 'http-status';

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

AcademicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExists = await AcademicDepartment.find({
    name: this.name,
  });
  if (isDepartmentExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This department is already exists',
    );
  }
  next();
});

// AcademicDepartmentSchema.pre('find', async function (next) {
//   // const neme = this;
//   console.log(this);
//   // const isDepartmentExists = await AcademicDepartment.findOne(this);
//   // if (!isDepartmentExists) {
//   //   throw new Error('This department does not exist');
//   // }
//   next();
// });

AcademicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const Query = this.getQuery();
  const isDepartmentExists = await AcademicDepartment.findOne({ Query });
  if (!isDepartmentExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This department does not exist');
  }
  next();
});

// Create the model
export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  AcademicDepartmentSchema,
);
