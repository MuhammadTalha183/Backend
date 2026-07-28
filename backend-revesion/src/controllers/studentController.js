
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
//  post request to register the students
export const regiserStudent = async (req , res) => {
  const {id , fullname , email , phone , course , gender } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO students (id, fullname, email , phone , course , gender) values ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id, fullname, email, phone ,course ,gender]
    );
    res.status(201).json({ message: "Student registered successfully", student: result.rows[0] });
  } catch (error) {
    console.error("Error registering student", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


// delete the specic sstudent 
export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query
("DELETE FROM students WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student deleted successfully", student: result.rows[0] });
  } catch (error) { 
    console.error("Error deleting student", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
// update student route
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  try { 
    const result = await pool.query(
      "UPDATE students SET name = $1, age = $2, email = $3 WHERE id = $4 RETURNING *",
      [name, age, email, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student updated successfully", student: result.rows[0] });
  } catch (error) {
    console.error("Error updating student", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};