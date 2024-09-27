import { MTGFormat } from '../../types/mtg/mtgFormats';
import { Deck } from '../baseDeckModel';

export class MTGDeck extends Deck {
  mtg_format?: MTGFormat;

  constructor(deckId: string, mtg_format? : MTGFormat) {
    super(deckId);
    this.mtg_format = mtg_format;
  }
  
}
