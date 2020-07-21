import * as express from 'express';
import * as cors from 'cors';
import apiRouter from './routes';
import * as path from 'path';
import fs from 'fs';

const app = express();

//Middleware
app.use(express.static("public"));

//must be before other middleware to parse incoming data
app.use(express.json());

//main api router
app.use("/api", apiRouter);

//allows react router to work without interference from express's GET attempts
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

