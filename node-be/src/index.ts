import express, { Express } from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import router from './router/router';

// Setup application ENV's
dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || '8000', 10);

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  }))

// Single router for entire application
app.use('/api', router)

app.listen(port, () => {
    console.log(`Application is running on PORT : ${port}`)
})