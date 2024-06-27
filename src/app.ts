import express from 'express';
import bodyParser from 'body-parser';
import eventRoutes from './routes/events';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/events', eventRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app;
