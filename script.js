describe('Audio Section Test', () => {
    it('should display the correct heading', () => {
        cy.visit('http://localhost:3000'); // Replace with your actual URL
        cy.contains('h2', '3 Random Audios'); // Ensure correct text and tag
    });
});
