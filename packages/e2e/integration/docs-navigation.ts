describe('docs navigation', () => {
  it('works without 404', () => {
    cy.visit('/')
    cy.findByText('Documentation').click()
    cy.location().should('have.property', 'pathname', '/getting-started')
    cy.findByText('Theming').click({ force: true })
    cy.get('h1').should('have.text', 'Theming')
    cy.findAllByRole('link').then(($links) => {
      const links = $links.get()
      const texts = links.map((link) => link.textContent)

      const expectedLinkTexts = [
        'Hooks',
        'API',
        'Theme Specification',
        'Demo',
        'Resources',
        'Components',
        'Packages',
        'Guides',
        'Recipes',
        'Migrating',
        'Edit the page on GitHub',
        'Previous:Getting Started with Gatsby',
      ]

      for (const s of expectedLinkTexts) {
        expect(texts).to.include(s)
      }

      const nextChapterLink = links.find(
        (link) => link.textContent === 'Next:The sx Prop'
      )!

      nextChapterLink.click()

      const packagesLink = links.find(
        (link) => link.textContent === 'Packages'
      )!

      packagesLink.click()
    })

    for (const packageName of [
      'css',
     