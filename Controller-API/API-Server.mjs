// server.mjs
import { createServer } from 'node:http';
import { SQLrequest } from './SqlRequests.mjs';
//import { SqlConnector } from './SqlConnector.mjs';

let request = new SQLrequest();
//SQLrequest.read("Noun", 4);
//SQLrequest.create("AcoreTestWord", "EngTestWord", "DefinitionTestWord", "Noun");
SQLrequest.readAll();



//Create simple http server on port 3000
const server = createServer ( (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// run with `node server.mjs`
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});