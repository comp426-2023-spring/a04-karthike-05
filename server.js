import {rps, rpsls} from './lib/rpsls.js';
import minimist from 'minimist';
import express from 'express';

const arg = minimist(process.argv.slice(2))
const app = express();
const port = arg.port || 5000 //Set default port to 5000