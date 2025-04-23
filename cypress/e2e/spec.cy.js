describe('First test template spec - URL HIT', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Second Test - Success Assertion check',() => {
  it('Does not do much',() => {
    expect(true).to.equal(true)
  })
})

describe('Third Test - Failure Assertion check', () => {
  it('just kidding', () => {
    expect(true).to.equal(false)
  })
})