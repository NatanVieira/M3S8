context('CalcSimples', () => {
    before(() => {
        cy.visit('localhost:44360/CalcSimples.aspx');
    });

    it('Exercicio1Cenario1', () => {
        cy.get('#txtN1').type(10);
        cy.get('#txtN2').type(123);
        cy.get('input').contains('Limpar');
        cy.get('#txtN1').type(25)
        cy.get('#rbFuncao_1').click();
        cy.get('#txtN2').type(35);
        cy.get('input').contains('Limpar');
        cy.get('#txtN1').type(5);
        cy.get('#rbFuncao_2').click();
        cy.get('#txtN2').type(55);
        cy.get('input').contains('Limpar');
        cy.get('#txtN1').type(20);
        cy.get('#rbFuncao_3').click();
        cy.get('#txtN2').type(2);
        cy.get('input').contains('Limpar');   
    });
    
    it('Exercicio1Cenario2', () => {
        cy.get('#txtN1').type(45);
        cy.get('#rbFuncao_1').click();
        cy.get('#txtN2').type(70);
        cy.get('input').contains('Limpar'); 
    });
});