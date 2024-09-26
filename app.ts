import express from 'express';
import deckRoutes from './routes/deckRoutes';
import cardRoutes from './routes/cardRoutes';

const app = express();
app.use(express.json());

app.use('/decks', deckRoutes);
app.use('/cards', cardRoutes);

export default app;
