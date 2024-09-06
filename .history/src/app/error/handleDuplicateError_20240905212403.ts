import mongoose from 'mongoose';
import { TGenericError } from '../interface/error';

export const handleDuplicateError = (
  err: mongoose.Error.ValidationError,
): TGenericError => {
  const errorSources = Object.values(err.errors).map((value) => {
    return {};
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
