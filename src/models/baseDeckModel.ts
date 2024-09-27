import { Card } from './baseCardModel';
import { Section } from '../types/deckSectionType';

interface CardPlayset {
  card: Card;
  quantity: number;
}

export class Deck {
  deckId: string;
  name: string;
  main: CardPlayset[];
  sideboard: CardPlayset[];
  maybeboard: CardPlayset[];

  constructor(deckId: string, name: string) {
    this.deckId = deckId;
    this.name = name
    this.main = [];
    this.sideboard = [];
    this.maybeboard = [];
  }

  addCard(card: Card, section: Section, quantity: number = 1) {
    const sectionArray = this[section];
    const existingCard = sectionArray.find(c => c.card.name.toLowerCase() === card.name.toLowerCase());

    if (existingCard) {
      existingCard.quantity += quantity;
    } else {
      sectionArray.push({ card, quantity });
    }
  }

  moveCard(cardName: string, fromSection: Section, toSection: Section) {
    const fromArray = this[fromSection];
    const cardIndex = fromArray.findIndex(c => c.card.name.toLowerCase() === cardName.toLowerCase());

    if (cardIndex === -1) throw new Error(`Card not found in ${fromSection}`);

    const [cardPlaysetCopies] = fromArray.splice(cardIndex, 1);
    this[toSection].push(cardPlaysetCopies);
  }

  moveCards(cardName: string, fromSection: Section, toSection: Section, quantity: number) {
    const fromArray = this[fromSection];
    const cardIndex = fromArray.findIndex(c => c.card.name.toLowerCase() === cardName.toLowerCase());

    if (cardIndex === -1) throw new Error(`Card not found in ${fromSection}`);
    //##TODO: Move a certain number of copies
    const [cardPlaysetCopies] = fromArray.splice(cardIndex, 1);
    this[toSection].push(cardPlaysetCopies);
  }
  removeCard(cardName: string, section: Section, quantity: number = 1) {
    const sectionArray = this[section];
    const cardIndex = sectionArray.findIndex(c => c.card.name.toLowerCase() === cardName.toLowerCase());

    if (cardIndex === -1) throw new Error(`Card not found in ${section}`);

    const cardPlaysetCopies = sectionArray[cardIndex];

    if (cardPlaysetCopies.quantity > quantity) {
      cardPlaysetCopies.quantity -= quantity;
    } else {
      sectionArray.splice(cardIndex, 1);
    }
  }
}
