const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dot-env').config();

let app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
}   
)

app.use(cors());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// new url for testing
app.get('/api/data', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM your_table_name');
        
        res.json(result.rows);
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data from database');
    }
});

const PORT = process.env.PORT || 3000;