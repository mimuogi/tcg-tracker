import { Section } from '../../types/deckSectionType';
import { Deck } from '../baseDeckModel';
import { MTGCard } from './mtgCardModel';

export class MTGDeck extends Deck {
  constructor(deckId: string) {
    super(deckId);
  }

  addCard(card: MTGCard, section: Section) {
    this[section].push(card);
  }
}