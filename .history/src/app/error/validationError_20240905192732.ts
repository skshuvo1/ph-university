import mongoose from 'mongoose';

export const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSources = err.errors;
  console.log(errorSources);

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    // errorSources,
  };
};
