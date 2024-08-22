import express from 'express';

const router = express.Router();
router.post('/create-student', studentController.createStudent);

export const userRoutes = router;
