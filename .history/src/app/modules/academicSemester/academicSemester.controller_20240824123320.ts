/* eslint-disable @typescript-eslint/no-unused-vars */

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { academicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res, next) => {
  // const { password, student: studentData } = req.body;

  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created successfully',
    data: result,
  });
});

const getAcademicSemesters = catchAsync(async (req, res, next) => {
  const result = await academicSemesterServices.getAllAcademicSemester();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters are retrieved successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await academicSemesterServices.getAcademicSemesterById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved successfully',
    data: result,
  });
});

export const academicSemesterController = {
  createAcademicSemester,
  getAcademicSemesters,
  getSingleAcademicSemester,
};
