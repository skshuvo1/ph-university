import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last name is required'] },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, 'Father name is required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact no is required'],
  },
  motherName: { type: String, required: [true, 'Mother name is required'] },
  motherOccupation: {
    type: String,
    required: [true, 'mother occupation is required'],
  },
  motherContactNo: { type: String },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, 'First name is required'] },
  occupation: { type: String, required: [true, 'First name is required'] },
  contactNo: { type: String, required: [true, 'First name is required'] },
  address: { type: String, required: [true, 'First name is required'] },
});

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    required: [true, 'First name is required'],
    unique: true,
  },
  name: { type: userNameSchema, required: [true, 'First name is required'] },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'First name is required'],
  },
  dateOfBirth: { type: String, required: [true, 'First name is required'] },
  email: {
    type: String,
    required: [true, 'First name is required'],
    unique: true,
  },
  contactNo: { type: String, required: [true, 'First name is required'] },
  emergencyContactNo: {
    type: String,
    required: [true, 'First name is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: [true, 'First name is required'] },
  permanentAddress: {
    type: String,
    required: [true, 'First name is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'First name is required'],
  },
  localGuardian: { type: localGuardianSchema },
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'block'], default: 'active' },
});

// Mongoose model
export const Student = model<TStudent>('Student', studentSchema);
