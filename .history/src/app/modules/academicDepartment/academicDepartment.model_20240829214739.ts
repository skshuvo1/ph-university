import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

class appError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

AcademicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExists = await AcademicDepartment.find({
    name: this.name,
  });
  if (isDepartmentExists) {
    throw new Error('This department is already exists');
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
    throw new Error('This department does not exist');
  }
  next();
});

// Create the model
export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  AcademicDepartmentSchema,
);
