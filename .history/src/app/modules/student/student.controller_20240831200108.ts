/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
import httpStatus from 'http-status';
import { sendResponse } from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const getAllStudent = catchAsync(async (req, res, next) => {
  const result = await studentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students are retrieved successfully',
    data: result,
  });
});

const getStudentById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await studentServices.getStudentById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await studentServices.updateStudentIntoDB(id, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await studentServices.deleteStudentById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
