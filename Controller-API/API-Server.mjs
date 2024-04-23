// server.mjs
import { createServer } from 'node:http';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import {SqlConector} from './SqlConnector.mjs';

const SqlConnect = new SqlConector();


SqlConnect.getQuery("select * from Dictionary");





/*
dotenv.config();

//Setup MySQL2 Pool Connection
const sqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 2,
    maxIdle: 1,
    idleTimeout: 1000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

let sqlQuery = 'select * FROM Dictionary';

//using mysql2/promise, set up async await to get query and return it.
async function test(){
  try {
    const [rows, fields] = await sqlPool.query(sqlQuery);
    if(rows != ''){
      console.log(rows)
    }
    if(fields != ''){
      console.log(fields)
    }

  } catch (err) {
    console.log(err);
  }
}
console.log(test());
*/




//Create simple http server on port 3000
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// run with `node server.mjs`
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

