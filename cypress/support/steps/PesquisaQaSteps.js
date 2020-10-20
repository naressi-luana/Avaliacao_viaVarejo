import PesquisaQaObjects from '../pageObjects/PesquisaQaObjects';
const pesquisaQaObjects = new PesquisaQaObjects();

// Cenário Dados Obrigatórios
Given('que eu acesse a pagina da VV Test', () => {
    pesquisaQaObjects.acessarVVTest();
});

And('acesse o menu {string}', (pesquisaQA) => {
    pesquisaQaObjects.acessarPesquisaQA(pesquisaQA);
});

When('eu preencher todos os campos obrigatórios {string} {string} {string} {string} {string} {string} {string} {string} {string}',
    (nome, sobrenome, email, emailConfirmacao, idade, pergunta1, pergunta2, pergunta3, pergunta4) => {
    pesquisaQaObjects.digitarNome(nome);
    pesquisaQaObjects.digitarSobrenome(sobrenome);
    pesquisaQaObjects.digitarEmail(email);
    pesquisaQaObjects.digitarEmailConfirmacao(emailConfirmacao);
    pesquisaQaObjects.clicarIdade(idade);
    pesquisaQaObjects.selectExperiencia(pergunta1);
    pesquisaQaObjects.selectAtraiuArea(pergunta2);
    pesquisaQaObjects.radioMelhoria(pergunta3);
    pesquisaQaObjects.digitarLinguagens(pergunta4);
    pesquisaQaObjects.clicarEnviar();
});

Then('deve ser direcionado para uma página de sucesso', () => {
    pesquisaQaObjects.mensagemConfirmacao();
});

// Cenário Email não correspondentes
Then('deve aparecer a mensagem de erro', () => {
    pesquisaQaObjects.mensagemErro();
});


