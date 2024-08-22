import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';
// import { userValidation } from './user.validation';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParsedData = userValidation.parse(studentData);

    const result = await userServices.createStudentIntoDB(
      password,
      studentData,
    );

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is created successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userControllers = {
  createStudent,
};
