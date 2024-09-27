export interface ICard {
    name: string;
    type_line: string;
    oracle_text: string;
    image_uris?: { normal: string };
    price?: number;      // Optional field in the base card interface
    currency?: string;
  }
  