import mongoose from 'mongoose';
import { TErrorSources, TGenericError } from '../interface/error';

export const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericError => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];
  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid Id',
    errorSources,
  };
};
