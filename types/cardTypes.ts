export interface ICard {
    name: string;
    play_cost: string;
    type_line: string;
    oracle_text: string;
    collection: string;
    image_uris?: { normal: string };
    price: number;
    currency: string;
}