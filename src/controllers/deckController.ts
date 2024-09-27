import { v4 as uuidv4 } from 'uuid';
import { Deck } from '../models/baseDeckModel';
import { MTGDeck } from '../models//mtg/mtgDeckModel';  
import { getMTGCardByName } from '../services/scryfallCardService';
import { Section } from '../types/deckSectionType';


const decks: { [deckId: string]: Deck } = {};


export function createDeck(): Deck {
  const deckId = uuidv4();
  const newDeck = new MTGDeck(deckId);  
  decks[deckId] = newDeck;
  return newDeck;
};

export const addCardToDeck = async (deckId: string, cardName: string, section: Section, quantity: number = 1): Promise<Deck> => {
  if (!decks[deckId]) throw new Error('Deck not found');
  
  const card = await getMTGCardByName(cardName);
  if (!['main', 'sideboard', 'maybeboard'].includes(section)) throw new Error('Invalid section');

  const deck = decks[deckId];
  deck.addCard(card, section, quantity);  

  return deck;
};

export const moveCardBetweenSections = (deckId: string, cardName: string, fromSection: Section, toSection: Section): Deck => {
  if (!decks[deckId]) throw new Error('Deck not found');
  if (!['main', 'sideboard', 'maybeboard'].includes(fromSection) || !['main', 'sideboard', 'maybeboard'].includes(toSection)) {
    throw new Error('Invalid section');
  }

  const deck = decks[deckId];
  deck.moveCard(cardName, fromSection, toSection);  

  return deck;
};

export const removeCardFromDeck = (deckId: string, cardName: string, section: Section, quantity: number = 1): Deck => {
  if (!decks[deckId]) throw new Error('Deck not found');
  if (!['main', 'sideboard', 'maybeboard'].includes(section)) throw new Error('Invalid section');

  const deck = decks[deckId];
  deck.removeCard(cardName, section, quantity); 

  return deck;
};
