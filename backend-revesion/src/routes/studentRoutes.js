import express from 'express';
import { getAllStudents , getStudentByID , regiserStudent} from '../controllers/studentController.js';
const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.get("/:id", getStudentByID);
studentRouter.post("/register", regiserStudent);

export default studentRouter ;
