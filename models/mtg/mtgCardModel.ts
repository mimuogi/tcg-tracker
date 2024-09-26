// src/models/mtgCardModel.ts
import { Card } from '../baseCardModel';

export class MTGCard extends Card {
  mana_cost?: string;  // MTG-specific property

  constructor(name: string, type_line: string, oracle_text: string, mana_cost?: string, image_uris?: { normal: string }) {
    super(name, type_line, oracle_text, image_uris);
    this.mana_cost = mana_cost;
  }
}


