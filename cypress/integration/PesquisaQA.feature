#language:pt
Funcionalidade: Pesquisa com o QA
Como um recrutador
Quero colher dados da pesquisa
Para fazer análises mais detalhadas do QA

Esquema do Cenário: Preencher pesquisa com dados obrigatórios válidos
Dado que eu acesse a pagina da VV Test
E acesse o menu "Pesquisa – QA"
Quando eu preencher todos os campos obrigatórios <nome> <sobrenome> <email> <emailConfirmacao> <idade> <pergunta1> <pergunta2> <pergunta3> <pergunta4>
Então deve ser direcionado para uma página de sucesso

Exemplos:
| nome   | sobrenome  | email                    | emailConfirmacao         | idade   | pergunta1        | pergunta2 | pergunta3 | pergunta4                       |
| "João" | "Silva"    | "joaosilva@email.com"    | "joaosilva@email.com"    | "31-49" | "mais de 5 anos" | "Desafio" | "negocio" | "Javascript, Python, Java, C++" |
| "Jean" | "Custodio" | "jeancustodio@email.com" | "jeancustodio@email.com" | "31-49" | "mais de 5 anos" | "Desafio" | "negocio" | "Javascript, Python, Java, C++" |

@focus
Esquema do Cenário: Validar diferença de emails
Dado que eu acesse a pagina da VV Test
E acesse o menu "Pesquisa – QA"
Quando eu preencher todos os campos obrigatórios <nome> <sobrenome> <email> <emailConfirmacao> <idade> <pergunta1> <pergunta2> <pergunta3> <pergunta4>
Então deve aparecer a mensagem de erro  

Exemplos:
| nome   | sobrenome  | email                    | emailConfirmacao         | idade   | pergunta1        | pergunta2 | pergunta3 | pergunta4                       |
| "João" | "Silva"    | "joaosilv@email.com"    | "joaosilva@email.com"    | "31-49" | "mais de 5 anos" | "Desafio" | "negocio" | "Javascript, Python, Java, C++" |