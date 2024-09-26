import { Card } from './baseCardModel';

export class Deck {
  deckId: string;
  main: Card[];
  sideboard: Card[];
  maybeboard: Card[];

  constructor(deckId: string) {
    this.deckId = deckId;
    this.main = [];
    this.sideboard = [];
    this.maybeboard = [];
  }
}
