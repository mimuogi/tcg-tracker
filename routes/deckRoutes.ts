import { Router } from 'express';
import { createDeck, addCardToDeck, moveCardBetweenSections, removeCardFromDeck } from '../controllers/deckController';

const router = Router();

router.post('/', (req, res) => {
  try {
    const deck = createDeck();
    res.json({ deckId: deck.deckId, message: "Deck created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:deckId/add', async (req, res) => {
  const { deckId } = req.params;
  const { cardName, section } = req.body;

  try {
    const deck = await addCardToDeck(deckId, cardName, section);
    res.json({ message: `Card added to ${section} successfully`, deck });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:deckId/move', (req, res) => {
  const { deckId } = req.params;
  const { cardName, fromSection, toSection } = req.body;

  try {
    const deck = moveCardBetweenSections(deckId, cardName, fromSection, toSection);
    res.json({ message: `Card moved from ${fromSection} to ${toSection} successfully`, deck });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:deckId/remove', (req, res) => {
  const { deckId } = req.params;
  const { cardName, section } = req.body;

  try {
    const deck = removeCardFromDeck(deckId, cardName, section);
    res.json({ message: `Card removed from ${section} successfully`, deck });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
