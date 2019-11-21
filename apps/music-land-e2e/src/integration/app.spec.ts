import { getGreeting } from '../support/app.po';

describe('music-land', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to music-land!');
  });
});
