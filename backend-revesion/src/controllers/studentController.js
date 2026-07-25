
import pool from "../../config/db.js";
export const getAllStudents = async (req , res)=>{
  try {
    const result = await pool.query("select * from students");
    res.json(result.rows)
  } catch (error) {
    console.error("Error fetching students", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}

// dynamic student 

export const getStudentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching student", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};