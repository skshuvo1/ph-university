import mongoose from 'mongoose';
import { TErrorSources } from '../interface/error';

type TGenericError = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericError => {
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
