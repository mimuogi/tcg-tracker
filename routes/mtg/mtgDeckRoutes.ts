// src/routes/mtgDeckRoutes.ts
import { Router } from 'express';
import { addMTGCardToDeck, createMTGDeck } from '../../controllers/mtg/mtgDeckController';

const router = Router();

router.post('/', (req, res) => {
  try {
    const deck = createMTGDeck();
    res.json({ deckId: deck.deckId, message: "MTG Deck created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:deckId/add', async (req, res) => {
  const { deckId } = req.params;
  const { cardName, section } = req.body;

  try {
    const deck = await addMTGCardToDeck(deckId, cardName, section);
    res.json({ message: `Card added to ${section} successfully`, deck });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Implement other deck routes...

export default router;
