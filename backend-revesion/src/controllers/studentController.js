
import pool from "../../config/db.js";
const getStudentAllStudents = async (req , res)=>{
  try {
    const result = await pool.query("select * from students");
    res.json(result.rows)
  } catch (error) {
    console.error("Error fetching students", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}
