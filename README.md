Trabalho Final de COM231 - Banco de Dados II



### Tecnologias Utilizadas

Node.js, Express.js, PostgreSQL e Sequelize ORM



### API Escolhida

A API escolhida foi a [Coronavirus COVID19 API](https://documenter.getpostman.com/view/10808728/SzS8rjbc#00030720-fae3-4c72-8aea-ad01ba17adf8)



### Requisitos e Especificações do Projeto

[Sistema de consulta de números da Covid 19](https://docs.google.com/document/d/1neDEdx3qQKZJbB2QRVFR94CtXXmDlEDb/edit?usp=sharing&ouid=104085836446388510855&rtpof=true&sd=true)



### Modelo Relacional criado a partir dos dados disponíveis na API

![image-20211203224722486](C:\Users\rtiof\AppData\Roaming\Typora\typora-user-images\image-20211203224722486.png)



## Como Utilizar

### Configurações da Aplicação

Após criar o banco de dados, basta clonar este repositório e

1. Abrir o projeto com o terminal em sua raiz e baixar os arquivos do node.js:

`npm install`

`npm install nodemon`

`npm install axios`

2. Após baixar e instalar todas as dependências, é preciso baixar e instalar o Express.js e o Sequelize:

`npm i express`

`npm i sequelize`

`npm i sequelize-cli`

3. Agora, é preciso iniciar o node, para criarmos o ambiente de servidor e ORM:

`npm init -y`

4. Depois desse passo, é interessante ir até a pasta app/config, entrar no arquivo config.json e mudar as variáveis username, password e database de acordo com os configurados em sua máquina:

```json
{
  "development": {
    "username": NOME_DO_SEU_USUARIO,
    "password": SUA_SENHA,
    "database": NOME_DO_SEU_BANCO,
    "host": "SEU_HOST",
    "dialect": "postgres"
  },
...
}
```

5. Após configurarmos as variáveis de sistema, fica prático criarmos as tabelas e modelos no banco de dados com a linha:

`npx sequelize-cli db:migrate`

6. Após este processo é só rodar o comando `npm start` que as tuplas começarão a ser preenchidas