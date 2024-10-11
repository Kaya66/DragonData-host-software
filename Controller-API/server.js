import express from 'express';
//import cors from 'cors';
import { SQLrequest } from './SqlRequests.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const api = express();
const port = 3000;



//smpl data can go here
const words = [
    { word: 'Tiru', english_word: 'Bird', definition: 'An Avian of Earth', pos: 'noun' }
];

api.use(express.static(path.join(__dirname, '../View-Website')));

//api endpoints
api.get('/api/async.json', async (req, res) => {

        SQLrequest.readAll().then((result)=>{
            console.log(result);
            res.json(result);
        });
        
        

});


api.get('/api/words', (req, res) => {
    res.json(words);
});

//start server
api.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});