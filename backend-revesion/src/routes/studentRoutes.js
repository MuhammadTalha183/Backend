import express from 'express';
import { getAllStudents , getStudentByID } from '../controllers/studentController.js';
const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.get("/:id", getStudentByID);

export default studentRouter ;
