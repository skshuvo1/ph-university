import { Request, Response } from 'express';
import { userServices } from './user.service';
// import { userValidation } from './user.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParsedData = userValidation.parse(studentData);

    const result = await userServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const userControllers = {
  createStudent,
};
