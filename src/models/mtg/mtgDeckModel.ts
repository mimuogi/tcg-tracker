import { MTGFormat } from '../../types/mtg/mtgFormats';
import { Deck } from '../baseDeckModel';

export class MTGDeck extends Deck {
  mtg_format?: MTGFormat;

  constructor(deckId: string, name: string, mtg_format? : MTGFormat) {
    super(deckId, name);
    this.mtg_format = mtg_format;
  }
  
}
