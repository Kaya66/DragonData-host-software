import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config()


export class SqlConnector {

  static sqlPool = mysql.createPool ({
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
  
  async getQuery (sqlQuery) {
    try {
      console.log ("getQuery has started");
      const [rows, fields] = await SqlConnector.sqlPool.query(sqlQuery);
      if (rows != '') {
        console.log (rows)
      }
      if(fields != '') {
        console.log (fields)
      }
    } catch (err) {
      console.log (err);
      console.log ("ERROR DETECTED");
    }
  }
}
