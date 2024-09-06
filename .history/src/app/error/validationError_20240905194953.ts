import mongoose from 'mongoose';
import { TErrorSources } from '../interface/error';

export const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSources = Object.values(err.errors).map((value) => {
    return {
      path: value?.path,
      message: value?.message,
    };
  });

  const statusCode = 400;
  const heyYou = 'listen';
  type TGenericError = {
    statusCode: number;
    message: string;
    errorSources: TErrorSources;
  };

  return {
    heyYou,
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
