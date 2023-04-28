import {rps, rpsls} from './lib/rpsls.js';
import minimist from 'minimist';
import express from 'express';

const arg = minimist(process.argv.slice(2))
const app = express();
const port = arg.port || 5000 //Set default port to 5000
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app', (req, res) => {
    res.status(200).send("200 OK"); 
});
app.get('/app/rps', (req, res) => {
    res.status(200).send(rps()); 
});
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls()); 
});
app.get('/app/rps/play/', (req, res) => {
    res.status(200).send(rps(req.query.shot)); 
});



app.listen(port);