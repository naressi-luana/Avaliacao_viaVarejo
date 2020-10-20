/// <reference types = "Cypress" />
import PesquisaQaElements from '../elements/PesquisaQaElements';
const pesquisaQaElements = new PesquisaQaElements();

const CAMPOSNAOCORRESPONDENTES = 'Estes campos devem corresponder!';
const ERROR = 'Corrija os erros antes de enviar este formulário.';
class PesquisaQaObjects {
    acessarVVTest() {
        cy.acessaVVTest();
    }

    acessarPesquisaQA(pesquisaQA) {
        cy.visit('vvtest/?page_id=2');
        cy.get(pesquisaQaElements.headerPesquisa()).should('contain.text', pesquisaQA);
    }

    digitarNome(nome) {
        cy.get(pesquisaQaElements.inputNome()).type(nome);
    }

    digitarSobrenome(sobrenome) {
        cy.get(pesquisaQaElements.inputSobrenome()).type(sobrenome);
    }

    digitarEmail(email) {
        cy.get(pesquisaQaElements.inputEmail()).type(email);
    }

    digitarEmailConfirmacao(emailConfirmacao) {
        cy.get(pesquisaQaElements.inputEmailConfirmacao()).type(emailConfirmacao);
    }

    clicarIdade(idade) {
        cy.get(pesquisaQaElements.radio31a49()).should('have.value', idade);
        cy.get(pesquisaQaElements.radio31a49()).check({ force: true });
    }

    selectExperiencia(pergunta1) {
        cy.get(pesquisaQaElements.selectExperiencia()).select(pergunta1);
    }

    selectAtraiuArea(pergunta2) {
        cy.get(pesquisaQaElements.selectArea()).select(pergunta2);
    }

    radioMelhoria(pergunta3) {
        cy.get(pesquisaQaElements.radioMelhorarNegocio()).should('have.value', pergunta3)
        cy.get(pesquisaQaElements.radioMelhorarNegocio()).check({ force: true });
    }

    digitarLinguagens(pergunta4) {
        cy.get(pesquisaQaElements.inputLinguagem()).type(pergunta4);
    }

    clicarEnviar() {
        cy.get(pesquisaQaElements.buttonEnviar()).click({ force: true });
    }

    mensagemConfirmacao() {
        cy.get(pesquisaQaElements.mensagemConfirmacao()).should('contain.text', 'Your form has been successfully submitted.');
    }

    mensagemErro() {
        cy.get(pesquisaQaElements.mensagemErrorEmail()).should('contain.text',CAMPOSNAOCORRESPONDENTES);
        cy.get(pesquisaQaElements.mensagemError()).should('contain.text', ERROR);
    }

}

export default PesquisaQaObjects;