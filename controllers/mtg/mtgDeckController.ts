// src/controllers/mtgDeckController.ts
import { v4 as uuidv4 } from 'uuid';
import { MTGDeck } from '../models/mtgDeckModel';
import { getMTGCardByName } from '../services/cardService';
import { Section } from '../types/deckTypes';
import { decks } from '../models/deckModel'; // Reusing decks object from the previous model

export const createMTGDeck = (): MTGDeck => {
  const deckId = uuidv4();
  const newDeck = new MTGDeck(deckId);
  decks[deckId] = newDeck;
  return newDeck;
};

export const addMTGCardToDeck = async (deckId: string, cardName: string, section: Section) => {
  const card = await getMTGCardByName(cardName);
  if (!decks[deckId]) throw new Error('Deck not found');
  if (!['main', 'sideboard', 'maybeboard'].includes(section)) throw new Error('Invalid section');
  
  (decks[deckId] as MTGDeck).addCard(card, section);
  return decks[deckId];
};

// Implement other deck methods like move and remove using MTGDeck
