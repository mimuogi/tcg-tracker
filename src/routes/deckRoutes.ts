import express, { Request, Response } from 'express';
import { createDeck, addCardToDeck, moveCardBetweenSections, removeCardFromDeck } from '../controllers/deckController';

const deckRouter = express.Router();

deckRouter.post('/decks', (req: Request, res: Response) => {
  try {
    const newDeck = createDeck();
    res.status(201).json(newDeck);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create deck' });
  }
});


deckRouter.post('/decks/:deckId/cards', async (req: Request, res: Response) => {
    const { deckId } = req.params;
    const { cardName, section, quantity } = req.body;
  
    try {
      const updatedDeck = await addCardToDeck(deckId, cardName, section, quantity || 1);
      res.status(200).json(updatedDeck);
    } catch (error) {    
      const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
      res.status(500).json({ error: errorMessage });
    }
  });
  
deckRouter.put('/decks/:deckId/cards/move', (req: Request, res: Response) => {
  const { deckId } = req.params;
  const { cardName, fromSection, toSection } = req.body;

  try {
    const updatedDeck = moveCardBetweenSections(deckId, cardName, fromSection, toSection);
    res.status(200).json(updatedDeck);
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
  res.status(500).json({ error: errorMessage });
    }
});

deckRouter.delete('/decks/:deckId/cards', (req: Request, res: Response) => {
    const { deckId } = req.params;
    const { cardName, section, quantity } = req.body;
  
    try {
      const updatedDeck = removeCardFromDeck(deckId, cardName, section, quantity || 1); 
      res.status(200).json(updatedDeck);
    } catch (error) {
      
  const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
  res.status(500).json({ error: errorMessage });
    }
  });
  

export default deckRouter;
