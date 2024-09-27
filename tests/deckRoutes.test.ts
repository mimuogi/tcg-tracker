import request from 'supertest';
import app from '../src/app';  
import { describe, it } from 'node:test';

describe('Deck Routes', () => {

  it('should create a new deck', async () => {
    const response = await request(app)
      .post('/api/decks')
      .send();
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('deckId');  
  });

  it('should add a card to a deck', async () => {
    const deckId = 'someDeckId';  
    const response = await request(app)
      .post(`/api/decks/${deckId}/cards`)
      .send({
        cardName: 'Black Lotus',
        section: 'main',
        quantity: 1
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('cards');
  });

  it('should move a card between sections', async () => {
    const deckId = 'someDeckId';
    const response = await request(app)
      .put(`/api/decks/${deckId}/cards/move`)
      .send({
        cardName: 'Black Lotus',
        fromSection: 'main',
        toSection: 'side'
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('cards');
  });

  it('should delete a card from the deck', async () => {
    const deckId = 'someDeckId';
    const response = await request(app)
      .delete(`/api/decks/${deckId}/cards`)
      .send({
        cardName: 'Black Lotus',
        section: 'main',
        quantity: 1
      });
    expect(response.statusCode).toBe(200);
  });
});
function expect(statusCode: any) {
    throw new Error('Function not implemented.');
}

