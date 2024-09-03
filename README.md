# Star Wars API

Este projeto é uma API que fornece dados relacionados ao universo de Star Wars, incluindo informações sobre personagens, filmes, planetas e mais. A API é construída para facilitar o acesso a dados de Star Wars para desenvolvedores e entusiastas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript usada para construir a API.
- **Express**: Framework web para Node.js, utilizado para criar a estrutura da API.
- **MongoDB**: Banco de dados NoSQL usado para armazenar e gerenciar os dados do universo de Star Wars.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB e Node.js.

## Como Executar

1. Clone este repositório:

    ```bash
    git clone https://github.com/LuisCrispim/starwars-api.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd starwars-api
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente, incluindo a conexão com o MongoDB. Crie um arquivo `.env` na raiz do projeto e adicione suas configurações:

    ```env
    MONGODB_URI=your_mongodb_uri
    PORT=3000
    ```

5. Execute a aplicação:

    ```bash
    npm start
    ```

6. Acesse a API em `http://localhost:3000`.

## Estrutura do Projeto

- **/models**: Contém os modelos de dados para os personagens, filmes, etc.
- **/routes**: Contém as rotas da API que definem os endpoints para acessar os dados.
- **/controllers**: Contém a lógica de controle para gerenciar as requisições e respostas.

## Contribuições

Contribuições são bem-vindas! Abra issues para relatar bugs ou sugerir melhorias, e envie pull requests com suas alterações.


