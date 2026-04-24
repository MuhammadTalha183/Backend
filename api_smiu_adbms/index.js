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