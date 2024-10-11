// server.mjs
import { createServer } from 'node:http';
import { SQLrequest } from './SqlRequests.mjs';
//import { SqlConnector } from './SqlConnector.mjs';

let request = new SQLrequest();
//SQLrequest.read("Noun", 4);
//SQLrequest.create("AcoreTestWord", "EngTestWord", "DefinitionTestWord", "Noun");

//The queries return a JSON object that can be accessed via result[x].id
//example result[0].word would output the text in the word field of the first item returend. 
SQLrequest.readAll().then((result)=>{
  console.log(result);
});

export class sqlCommands {
  static async readAll(){
    SQLrequest.readAll().then((result)=>{
      return result;
    });
  }
}



//This will output all items in the table in the word column. 
/*
SQLrequest.readAll().then((result) => {
  for(let i = 0; i < result.length; i++){
    sqlResult = sqlResult
    console.log(result[i].word);
  }
  sqlResult = result
})
*/