// server.mjs
import { createServer } from 'node:http';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
import { table } from 'node:console';
dotenv.config();

//Setup MySQL Connection
let connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

//Connect to MySQL server
connection.connect((err) => {
  if (err) return console.error(err.message);

  console.log('Connected to MySQL Server.');
})


let sql = 'SHOW COLUMNS FROM Alphabet';

//Create a promise to pull info from mysql server and populate
let getTable = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

    let table = connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("result: " + result);
    })


    myResolve(table); // when successful
    myReject();  // when error
  });
  
  // "Consuming Code" (Must wait for a fulfilled Promise)
  getTable.then(
    function(value) { return value },
    function(error) { return "Error" }
  );




  console.log(table);




//Create simple http server on port 3000
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});


// run with `node server.mjs`
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

