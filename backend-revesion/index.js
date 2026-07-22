import express from "express";
import pool  from "./config/db.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/students",  async (req , res)=>{
  try {
    const result = await pool.query("select * from students");
    res.json(result.rows)
  } catch (error) {
    console.error("Error fetching students", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});