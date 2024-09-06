import mongoose from 'mongoose';
import { TGenericError } from '../interface/error';

export const handleDuplicateError = (
  err: mongoose.Error.ValidationError,
): TGenericError => {
  const errorSources = Object.values(err.errors).map((value) => {
    return {
      path: value?.path,
      message: value?.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
