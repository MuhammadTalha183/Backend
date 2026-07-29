import express from "express";
import pool  from "./config/db.js";
import studentRouter from "./src/routes/studentRoutes.js";
import { getStudentByID , deleteStudent , regiserStudent} from "./src/controllers/studentController.js";
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// 🟢 ADD THIS LINE BEFORE YOUR ROUTES
app.use(express.json()); 
app.use("/students", studentRouter);

//  dynamic student route use 
app.use("/students/:id", getStudentByID);
// Delete the specfic student route use
app.use("/studentsDelete/:id", deleteStudent);

// register the student route use
app.use("/students/register", regiserStudent);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});