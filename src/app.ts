import express from 'express';
import deckRoutes from './routes/deckRoutes';

const app = express();
app.use(express.json());

app.use('/api', deckRoutes);

export default app;
