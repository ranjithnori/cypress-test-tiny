describe('Block 1', () => {
  beforeEach(() => {
    window.localStorage.setItem('secret', 'random');
    cy.intercept('https://staging.api.kisi.io/user').as('getBaseUser');
  });

  it('Silly test 1', () => {
    cy.visit('https://staging.web.kisi.io/users/sign_up');
  });
});

describe('Block 2', () => {
  beforeEach(() => {console.error("before Each")});

  it('Silly test 2', () => {
    cy.visit('https://staging.web.kisi.io/users/sign_in');
    cy.contains('Random text');
  });
});

