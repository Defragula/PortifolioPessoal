# Portfólio GitHub Pages

Modelo estático moderno para portfólio pessoal/profissional.

## Estrutura

```text
portfolio_github_pages/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── README.md
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta.
3. No GitHub, vá em `Settings > Pages`.
4. Em `Build and deployment`, escolha:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve.
6. Aguarde o GitHub gerar o link do site.

## Onde editar

- Nome e textos principais: `index.html`
- Cores, layout e aparência: `assets/css/style.css`
- Tema claro/escuro, animações e parallax: `assets/js/main.js`

## Observação

Este projeto não depende de Flask, WordPress, banco de dados ou backend.
