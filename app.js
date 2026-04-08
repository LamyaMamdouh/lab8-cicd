const express = require('express');
<<<<<<< HEAD
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Lab8-CICD!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
=======
const mysql = require('mysql2/promise');
const app = express();
app.use(express.json());

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  waitForConnections: true,
});

app.get('/tasks', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('App running on port 3000'));
>>>>>>> 27eb5a7cc4c987cf127eda4c810e47bab0a2214c
