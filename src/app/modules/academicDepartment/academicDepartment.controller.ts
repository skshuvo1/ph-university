/* eslint-disable @typescript-eslint/no-unused-vars */

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { academicDepartmentServices } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res, next) => {
  const result =
    await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department is created successfully',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res, next) => {
  const result = await academicDepartmentServices.getAllAcademicDepartments();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic departments are retrieved successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await academicDepartmentServices.getAcademicDepartmentById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department is retrieved successfully',
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await academicDepartmentServices.updateAcademicDepartment(
    id,
    updateData,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department is updated successfully',
    data: result,
  });
});

export const academicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
