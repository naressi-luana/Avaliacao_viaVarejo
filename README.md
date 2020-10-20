# Pesquisa com o QA

Teste executado: 

Funcionalidade: Pesquisa com o QA 

Como um recrutador

Quero colher dados da pesquisa 

Para fazer análises mais detalhadas do QA
 
Link: https://bit.ly/3jOMrR9
 
Cenário: Preencher pesquisa com dados obrigatórios válidos

Dado que eu acesse a página da VV Test

E acesse o menu "Pesquisa - QA"

Quando eu preencher todos os campos obrigatórios 

Então deve ser direcionado para uma página de sucesso


# Cypress

Cypress é uma ferramenta em *Javascript* de desenvolvimento de testes *end-to-end* voltada para a facilidade de configuração, curva baixa de aprendizagem.

Atualmente consegue-se executar em diversos navegadores como *Google Chrome*, *Firefox*, *Microsoft Edge* e *Electron*. 

Outro fator interessante sobre o *Cypress* é voltado também para testes de API e unitários, sendo uma ferramenta completa para testes.

# Cypress com Cucumber

Com a criação do *Cypress*, analistas de qualidades decidiram criar um plugin para integrar o Cucumber com o Cypress. O Cucumber é uma ferramenta que pode ser utilizada em conjunto com o Cypress e permite a escrita de testes automatizados no formato BDD (Behaviour-Driven Development).

# Estrutura do Projeto

**1. steps:** nesta pasta colocamos os passos que farão a conexão entre o que escrevemos em BDD e os scripts que fazemos em Cypress.

**2. pageobjects:** aqui deixamos os scripts feitos em Cypress.
A ideia do page objects é a de criarmos um arquivo.js para cada página ou fluxo do site. Dessa forma, mantemos a organização e facilitamos a manutenção do código, pois colocamos no arquivo os comandos que são executados na página/fluxo correspondentes ao nome do arquivo.
Ex.: PesquisaQaObjects.

**3. elements:** possui o mesmo conceito do page objects, mas aqui colocamos os elementos da página. Tal organização permite que elementos sejam reutilizados e tenham fácil manutenção.
Ex.: PesquisaQaElements.js

# Execução do Projeto

1. Realizar o download ou git clone do projeto;

2. Dentro do diretório do projeto execute o comando, lembrando que é necessário o node instalado [site oficial](https://nodejs.org/en/):

`npm install`

3. Executar o comando do *Cypress*:

`npx cypress open`

4. Após aberta a tela do *Cypress*, clica na *.feature* especifica do teste `PesquisaQA.feature`.

5. Para visualizar o vídeo gerado, basta acessar o [link](https://github.com/naressi-luana/Avaliacao_viaVarejo/tree/master/cypress/videos/PesquisaQA.feature.mp4)

## Etapas para criar um projeto com Cypress com Cucumber

1. Instalar Node.js: acesse o [site oficial](https://nodejs.org/en/), baixe e instale a versão para seu computador.

2. Instalar o Cypress com Cucumber:

a) Crie uma pasta onde ficarão os arquivos do seu projeto. Abra o terminal do windows e acesse essa mesma pasta com o seguinte comando:

`cd /your/project/path`

b) Tendo acessado a pasta do projeto, execute o comando de instalação:

`npm install --save-dev cypress cypress-cucumber-preprocessor`

c) Ainda dentro da pasta do seu projeto, execute o seguinte comando para que o Cypress termine de criar os arquivos locais:

`npx cypress open`

3. Adicione ao arquivo cypress/plugins/index.js o seguinte script:

```javascript 
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

4. Adicione o seguinte código no arquivo package.json:

```
{
    "scripts": {
        "test:chrome": "cypress run --browser chrome --no-exit"
    },
    "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
    }
}
```

# Referências:

- [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress.html);
- [Cypress Cucumber Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor);
