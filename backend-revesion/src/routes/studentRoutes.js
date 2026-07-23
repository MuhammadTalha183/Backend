import router from 'express';
import { getAllStudents } from '../controllers/studentController.js';
const studentRouter = router();

studentRouter.get("/", getAllStudents);