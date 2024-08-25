/* eslint-disable @typescript-eslint/no-unused-vars */

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

const createAcademicSemester = catchAsync(async (req, res, next) => {
  // const { password, student: studentData } = req.body;

  const result = await academicFacultyServices.createAcademicSemesterIntoDB(
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

const updateAcademicSemester = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  const result =
    await academicSemesterServices.getAcademicSemesterByIdAndUpdate(
      id,
      updateData,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is  successfully',
    data: result,
  });
});

export const academicSemesterController = {
  createAcademicSemester,
  getAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
