import mongoose from 'mongoose';
import { TErrorSources, TGenericError } from '../interface/error';

const handleCastError = (err: mongoose.Error.CastError): TGenericError => {
  const errorSources: TErrorSources = {
    path: err.path,
  };

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid Id',
    errorSources,
  };
};
