# Portfólio Pessoal - GitHub Pages - Versão 4

## Melhorias desta versão

- Cards de projetos mais completos
- Projeto real do próprio portfólio já com links
- Status visual dos projetos: Publicado, Estudo e Laboratório
- Nova seção "Notas / Mini blog estático"
- Melhor organização para substituir conteúdo fictício por real
- SEO/OpenGraph básico mantido
- Estrutura leve, estática e segura para GitHub Pages

## Estrutura correta

```text
PortifolioPessoal/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── img/
    │   └── favicon.svg
    └── js/
        └── main.js
```

## Onde editar projetos

No arquivo `index.html`, procure por:

```html
<section id="projetos">
```

Cada projeto está dentro de um bloco:

```html
<article class="glass-card project-card">
```

Edite:
- título;
- descrição;
- tags;
- status;
- links.

## Onde editar notas / mini blog

No arquivo `index.html`, procure por:

```html
<section id="notas">
```

Cada nota está dentro de:

```html
<article class="note-card">
```

## Onde editar contatos

No arquivo `index.html`, procure por:

```html
<section id="contato">
```

Exemplos:

```html
href="mailto:seuemail@exemplo.com"
href="https://www.linkedin.com/in/seu-usuario/"
href="https://github.com/Defragula"
href="https://wa.me/5511999999999"
```

## Como atualizar no GitHub

1. Extraia este ZIP.
2. Envie `index.html`, `README.md` e a pasta `assets`.
3. Substitua os arquivos antigos.
4. Clique em `Commit changes`.
5. Aguarde 1 a 3 minutos.
6. Atualize o site com `Ctrl + F5`.
