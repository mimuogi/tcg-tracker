// src/controllers/deckController.ts
import { v4 as uuidv4 } from 'uuid';
import { decks, Deck } from '../models/genericDeckModel';
import { getCardByName } from '../services/scryfallCardService';
import { Section } from '../types/deckSectionType';

export const createDeck = (): Deck => {
  const deckId = uuidv4();
  const newDeck: Deck = { deckId, main: [], sideboard: [], maybeboard: [] };
  decks[deckId] = newDeck;
  return newDeck;
};

export const addCardToDeck = async (deckId: string, cardName: string, section: Section): Promise<Deck> => {
  const card = await getCardByName(cardName);

  if (!decks[deckId]) throw new Error('Deck not found');
  if (!['main', 'sideboard', 'maybeboard'].includes(section)) throw new Error('Invalid section');

  decks[deckId][section].push(card);
  return decks[deckId];
};

export const moveCardBetweenSections = (deckId: string, cardName: string, fromSection: Section, toSection: Section): Deck => {
  if (!decks[deckId]) throw new Error('Deck not found');
  if (!['main', 'sideboard', 'maybeboard'].includes(fromSection) || !['main', 'sideboard', 'maybeboard'].includes(toSection)) {
    throw new Error('Invalid section');
  }

  const cardIndex = decks[deckId][fromSection].findIndex(card => card.name.toLowerCase() === cardName.toLowerCase());
  if (cardIndex === -1) throw new Error(`Card not found in ${fromSection}`);

  const [card] = decks[deckId][fromSection].splice(cardIndex, 1);
  decks[deckId][toSection].push(card);

  return decks[deckId];
};

export const removeCardFromDeck = (deckId: string, cardName: string, section: Section): Deck => {
  if (!decks[deckId]) throw new Error('Deck not found');
  if (!['main', 'sideboard', 'maybeboard'].includes(section)) throw new Error('Invalid section');

  const cardIndex = decks[deckId][section].findIndex(card => card.name.toLowerCase() === cardName.toLowerCase());
  if (cardIndex === -1) throw new Error(`Card not found in ${section}`);

  decks[deckId][section].splice(cardIndex, 1);
  return decks[deckId];
};
