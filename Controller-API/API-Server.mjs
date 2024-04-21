// server.mjs
import { createServer } from 'node:http';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

//ERROR Auth mode not supported? 
let connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});



connection.connect((err) => {
    if (err) return console.error(err.message);

    console.log('Connected to MySQL Server.');
})


const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`