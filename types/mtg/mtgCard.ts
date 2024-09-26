export interface MTGCard {
    name: string;
    mana_cost: string;
    color: string;
    type_line: string;
    spell_type: MTGSpellType[]
    oracle_text: string;
    collection: string;
    image_uris?: { normal: string };
    price: number;
    currency: string;
  }