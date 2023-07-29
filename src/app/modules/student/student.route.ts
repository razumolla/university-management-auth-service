import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidaion } from './student.validation';
import { StudentController } from './student.controller';
const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent
);

export const StudentRoutes = router;