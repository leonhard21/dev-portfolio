# Dev Portfolio

Portfólio pessoal desenvolvido em React + TypeScript, com visual dark/tech, seção de projetos, serviços de freelance e um formulário de pedido integrado ao WhatsApp.

**Demo:** https://leonhard21.github.io/dev-portfolio/

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS puro (sem frameworks de UI)

## Funcionalidades

- Seções de apresentação, sobre, habilidades, serviços, projetos e contato
- Cards de projetos gerados a partir de um arquivo de dados em JSON
- Formulário de pedido que monta e envia a mensagem direto pelo WhatsApp
- Layout responsivo (desktop e mobile)
- Deploy automático no GitHub Pages via GitHub Actions

## Como executar localmente

```bash
npm install
npm run dev
```

## Como atualizar o conteúdo

Todo o conteúdo do site (dados pessoais, habilidades, serviços e projetos) fica em
`src/data/site-data.json`. Basta editar esse arquivo para:

- Adicionar ou remover projetos (título, descrição, tags, link do GitHub, link da demo e imagem)
- Atualizar informações de contato (WhatsApp, e-mail, redes sociais)
- Ajustar a lista de habilidades e serviços oferecidos

Depois de editar o JSON, é só commitar e dar push na branch `main` — o GitHub Actions builda
e publica a nova versão automaticamente no GitHub Pages.

## Foto de perfil

Para exibir sua própria foto, adicione um arquivo `profile.jpg` na pasta `public/`. Enquanto
não houver imagem, o site mostra um avatar com as iniciais do nome.
