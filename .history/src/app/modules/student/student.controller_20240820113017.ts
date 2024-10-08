import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  const student = req.body;

  const result = await studentServices.createStudentIntoDB(student);

  res.status(200).json({
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
};

export const studentController = {
  createStudent,
};
