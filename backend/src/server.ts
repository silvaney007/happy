import express from 'express'
import './database/connection'
import Routes from './Routes'

const app = express();
app.use(express.json())
app.use(Routes);


app.listen(3333);