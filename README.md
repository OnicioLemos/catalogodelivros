# catalogodelivros

Este repositório contém uma aplicação web simples para gerenciar uma lista de leitura. Você pode adicionar livros à lista, atualizar seu progresso de leitura e excluí-los quando necessário.

Como Usar:
Clone este repositório: git clone https://github.com/seuusuario/nome-do-repositorio.git
Abra o arquivo index.html em seu navegador para acessar a aplicação.

Funcionalidades:
- Adicionar Livro: Preencha o formulário com o título do livro, sinopse, gênero e total de páginas, e clique em "Adicionar Livro".
- Atualizar Progresso: Clique no botão "Atualizar" ao lado do livro para inserir o progresso de leitura (em número de páginas).
- Excluir Livro: Clique no botão "Excluir" ao lado do livro para removê-lo da lista.

Estrutura do Código:
O código consiste em um arquivo HTML, um arquivo CSS e um arquivo JavaScript.
- HTML (index.html): Contém a estrutura da página web, incluindo o formulário para adicionar livros e a lista de livros.
- CSS (style.css): Estiliza a aparência da página.
- JavaScript (main.js): Controla as funcionalidades da aplicação, como adicionar, atualizar e excluir livros, além de carregar a lista de livros do servidor.

Tecnologias Utilizadas:
- HTML
- CSS
- JavaScript
- JSON Server (para simular um servidor RESTful localmente)
- VITE (Vite é uma ferramenta de construção de aplicações web modernas para projetos baseados em JavaScript e TypeScript)

Pré-requisitos:
Para executar a aplicação localmente, você precisa ter o JSON Server instalado. Você pode instalá-lo via npm:
npm install -g json-server

Executando Localmente:
Inicie o servidor JSON: json-server --watch db.json
Abra o arquivo index.html em seu navegador para acessar a aplicação.

Nota:
Esta aplicação é apenas para fins educacionais e demonstrativos. Se você deseja usar em produção, é recomendável implementar um servidor backend adequado para armazenar os dados de forma segura.
