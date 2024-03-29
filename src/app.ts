import express from 'express';
import config from 'config';
import log from './logger';
import connect from './db/connect'

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req , res) => {
    res.send("ts")
});

app.listen( port , host , () => {
    log.info(`Server listing at http://${host}:${port}`)

    connect()
});