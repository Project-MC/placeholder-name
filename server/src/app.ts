import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import api from './routes/api.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

// CORS set to allow all origins for now until production ready
app.use(
  cors({
    origin: '*'
  })
);
// Morgan is logging middleware and set to dev mode
// https://www.npmjs.com/package/morgan
app.use(morgan('dev'));
// Helmet is security middleware and set to default
// https://www.npmjs.com/package/helmet
app.use(helmet());

app.use(express.json());

app.use('/v1', api);

// Future use if serving front-end here

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/*', (_req, res) => {
//   res.sendFile(path.join(path.join(__dirname, 'public', 'index.html')));
// });

export default app;
