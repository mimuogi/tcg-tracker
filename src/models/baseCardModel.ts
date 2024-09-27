import { ICard } from "../types/cardTypes";

export class Card implements ICard {
  name: string;
  type_line: string;
  oracle_text: string;
  image_uris?: { normal: string };
  price?: number;
  currency?: string;

  constructor(
    name: string,
    type_line: string,
    oracle_text: string,
    image_uris?: { normal: string },
    price?: number,
    currency?: string
  ) {
    this.name = name;
    this.type_line = type_line;
    this.oracle_text = oracle_text;
    this.image_uris = image_uris;
    this.price = price;
    this.currency = currency;
  }
}
