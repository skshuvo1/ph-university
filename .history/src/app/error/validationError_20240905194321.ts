import mongoose from 'mongoose';

export const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSources = Object.values(err.errors).map((value) => {
    return {
      path: value?.path,
      message: value?.message,
    };
  });

  const statusCode = 400;
  const heyYou = 'listen';

  return {
    heyYou,
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
