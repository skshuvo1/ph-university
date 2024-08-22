import { Schema } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema = new Schema<TUser>(
  {
    id: { type: string, required: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, required: true }, // Adjusted to boolean
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
      required: true,
    },
    status: { type: String, enum: ['in-progress', 'blocked'], required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
); // Add timestamps for createdAt and updatedAt
