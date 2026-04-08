const express = require('express');
const mysql = require('mysql2/promise');
const os = require('os');

const app = express();
const PORT = 3000;

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  waitForConnections: true,
});

app.get('/', (req, res) => {
  res.json({
    app:  'CISC 886 Lab 8',
    mode: process.env.MODE || 'local',
    node: process.version,
    host: os.hostname(),
  });
});

app.get('/tasks', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks');
    const grouped = Object.groupBy(rows, task => task.status);
    res.json(grouped);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log('--------------------------------------------------');
  console.log(`  CISC 886 Lab 8 — App started`);
  console.log(`  Port:  ${PORT}`);
  console.log(`  Mode:  ${process.env.MODE || 'local'}`);
  console.log(`  Node:  ${process.version}`);
  console.log(`  Host:  ${os.hostname()}`);
  console.log('--------------------------------------------------');
});
