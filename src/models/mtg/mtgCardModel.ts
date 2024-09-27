import { Card } from '../baseCardModel';
import { MTGSpellType } from '../../types/mtg/mtgTypesSpell';


export class MTGCard extends Card {
  mana_cost?: string;
  color?: string;  
  spell_types?: MTGSpellType[]; 

  constructor(
    name: string,
    type_line: string,
    oracle_text: string,
    mana_cost?: string,
    color?: string,
    spell_types?: MTGSpellType[],
    image_uris?: { normal: string },
    price?: number,
    currency?: string
  ) {
    super(name, type_line, oracle_text, image_uris, price, currency);
    this.mana_cost = mana_cost;
    this.color = color;
    this.spell_types = spell_types;

  }
}


