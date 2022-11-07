import dotenv from 'dotenv-defaults';
import db from './db'
import routes from './routes/index';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/',routes);
dotenv.config();
db.connect();
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})
