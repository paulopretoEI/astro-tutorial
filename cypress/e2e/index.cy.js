
describe("Initial page tests", () => {
  it("Page renders correctly", () => {
    cy.visit("/");
    cy.get("title").should("have.text", "My astro website");
    cy.get("h2").should("have.text", "My awesome blog subtitle");
    cy.get("h3").should("have.text", "Hi! Thank you for visiting!");
  });
});
