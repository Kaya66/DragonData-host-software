import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config()



class SqlConnector {
  constructor(sqlQuery) {
    this.sqlQuery = sqlQuery;

      //Setup MySQL2 Pool Connection
    let sqlPool = mysql.createPool({
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
  };




async function getQuery(sqlQuery){
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




    
}
