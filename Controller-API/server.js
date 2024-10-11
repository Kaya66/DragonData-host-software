import express from 'express';
import { sqlCommands } from './SqlCmds.mjs';

const api = express();
const port = 3000;

//smpl data can go here
const words = [
    { word: 'Tiru', english_word: 'Bird', definition: 'An Avian of Earth', pos: 'noun' }
];

//api endpoint
api.get('/api/words', (req, res) => {
    res.json(words);
});

//start server
api.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});