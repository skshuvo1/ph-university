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

AcademicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExists = await AcademicDepartment.find({
    name: this.name,
  });
  if (isDepartmentExists) {
    throw new Error('This department is already exists');
  }
  next();
});

AcademicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const Query = this.getQuery();
  console.log(Query);
  //   if (isDepartmentExists) {
  //     throw new Error('This department is already exists');
  //   }
  next();
});

// Create the model
export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  AcademicDepartmentSchema,
);
