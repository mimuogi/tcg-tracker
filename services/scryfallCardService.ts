import axios from 'axios';
import { MTGCard } from '../models/mtg/mtgCardModel';

export const getMTGCardByName = async (cardName: string): Promise<MTGCard> => {
  try {
    const response = await axios.get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`);
    const cardData = response.data;
    return new MTGCard(
      cardData.name,
      cardData.type_line,
      cardData.oracle_text,
      cardData.mana_cost,
      cardData.image_uris
    );
  } catch (error) {
    throw new Error('Error fetching MTG card from Scryfall');
  }
};
