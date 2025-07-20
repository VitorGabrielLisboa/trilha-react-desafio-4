<div align="center">
  <img src="https://imgs.search.brave.com/rXBc9FsBXgOWNt0TWhsoVdVweNw6-2caW8RxdowOlCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvUmVh/Y3QtTG9nby1QTkct/SW1hZ2UtRmlsZS5w/bmc" alt="React Logo" title="React Logo" width="200">
</div>

<div align="center">

![Static Badge](https://img.shields.io/badge/React-blue?style=flat&logo=react&logoColor=%23ffffff&labelColor=%23222222&color=%2361DAFB) ![Static Badge](https://img.shields.io/badge/React%20Hook%20Form-green?style=flat&logo=react-hook-form&logoColor=%23ffffff&labelColor=%23222222&color=%23EC5990) ![Static Badge](https://img.shields.io/badge/Yup-blueviolet?style=flat&logo=yup&logoColor=%23ffffff&labelColor=%23222222&color=%23B5C9CC) ![Static Badge](https://img.shields.io/badge/React%20Icons-orange?style=flat&logo=react-icons&logoColor=%23ffffff&labelColor=%23222222&color=%23E69200) ![Static Badge](https://img.shields.io/badge/React%20Router%20DOM-red?style=flat&logo=react-router&logoColor=%23ffffff&labelColor=%23222222&color=%23CA4245)

</div>

# 🚀 Tela de Login com Validação

> Projeto front-end desenvolvido como parte da Formação React Developer, na plataforma da [DIO](https://www.dio.me/). Este projeto front-end tem como base criar uma tela de validação simples usando TypeScript, com o acréscimo de uma página de usuário minimalista e dinâmica.

---

## ⚒️ Ferramentas Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construir interfaces de usuário modernas e reativas.
- **[React Hook Form](https://react-hook-form.com/)**: Uma biblioteca de alta performance para gerenciamento de formulários em React, focada em validação e performance.
- **[Yup](https://github.com/jquense/yup)**: Um construtor de esquemas JavaScript para análise e validação de valores, integrado com o `react-hook-form` via `@hookform/resolvers/yup`.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Biblioteca que importa ícones populares (como Material Design) como componentes React, utilizados para adornar os campos de input.
- **[React Router DOM](https://reactrouter.com/web/guides/quick-start)**: Essencial para o gerenciamento de rotas e navegação na aplicação Single Page Application (SPA), permitindo a transição entre a tela de login e a tela de usuário.
- **Sass/SCSS Modules**: Utilizado para estilização modular de componentes, garantindo estilos encapsulados e organizados com a convenção `.module.scss`.

---

## 📌 Funcionalidades

O projeto atual apresenta as seguintes funcionalidades principais:

- **Página de Login (`/login`)**:

  - Formulário de autenticação para entrada de e-mail e senha.
  - **Validação de Formulário**: Integra `react-hook-form` com `Yup` para validação robusta dos campos (e-mail e senha), incluindo regras de preenchimento obrigatório e formato de e-mail.
  - **Feedback Visual de Validação**: Mensagens de erro são exibidas em tempo real para campos inválidos, guiando o usuário no preenchimento correto.
  - **Botão de Login Desabilitado**: O botão de submissão permanece desabilitado (`disabled={!isValid}`) enquanto o formulário não atender a todas as regras de validação.
  - **Navegação**: Após a submissão bem-sucedida do formulário, o usuário é redirecionado para a página de boas-vindas (`/user`), e o e-mail inserido é passado como estado de rota.

- **Página de Boas-Vindas do Usuário (`/user`)**:
  - Exibe uma mensagem de boas-vindas dinâmica, mostrando o nome do usuário.
  - **Processamento de E-mail**: O nome do usuário é extraído do e-mail recebido via `location.state` (removendo a parte `@dominio.com`) e capitalizado (primeira letra maiúscula) para uma apresentação amigável. Caso o e-mail não seja recebido, um valor padrão é utilizado.
