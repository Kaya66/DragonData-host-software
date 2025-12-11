import express from 'express';
import { SQLrequest } from './SqlRequests.mjs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const api = express();
const port = 3000;


api.use(express.static(path.join(__dirname, '../Website')));

//api endpoints
api.get('/async.json', async (req, res) => {
        SQLrequest.readAll().then((result)=>{
            console.log(result);
            res.json(result);
        });
});


api.get('/url', (req, res) => {
    res.json(data);
});

//serve index.html
api.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Website/index.html'));
});

//start server
api.listen(port, '0.0.0.0', () => {
    console.log(`API server running at http://localhost:${port}`);
});