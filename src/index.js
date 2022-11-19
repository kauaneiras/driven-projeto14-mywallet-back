import express from 'express';
import nodemon from 'nodemon';
import dotenv from 'dotenv';
import cors from 'cors';
import Joi from 'joi';

import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();




const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));