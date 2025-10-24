# Projeto Plataforma ONG - Patas Amigas (HTML, CSS, JS)

Este projeto simula a criação de uma plataforma web para uma ONG fictícia chamada "Patas Amigas", focada no resgate e adoção de animais. O desenvolvimento abrange desde a estruturação semântica com HTML5, passando pela estilização responsiva com CSS3, até a implementação de interatividade com JavaScript puro, culminando em práticas de acessibilidade, otimização e versionamento profissional com Git.

## ✨ Funcionalidades Implementadas

* **Estrutura Semântica (HTML5):** Utilização correta de tags como `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<figure>`.
* **Design System (CSS3):** Paleta de cores, tipografia hierárquica e espaçamento modular definidos com variáveis CSS (`_variables.css`).
* **Layout Responsivo (CSS3):**
    * Uso de CSS Grid para a estrutura principal da página.
    * Uso de Flexbox para componentes internos (cabeçalho, galeria de cards).
    * Adaptação para diferentes tamanhos de tela (`@media`).
* **Navegação:** Menu principal responsivo com transformação em menu hambúrguer para dispositivos móveis.
* **Componentes:** Cards responsivos para exibição dos animais, botões com estados visuais, formulários estilizados.
* **Single Page Application (SPA) Básica (JavaScript):** Navegação entre as páginas (`index.html`, `projetos.html`, `cadastro.html`) sem recarregamento, utilizando `fetch` e `History API`.
* **Validação de Formulário (JavaScript):** Sistema customizado de validação no formulário de cadastro, com mensagens de erro específicas para o usuário.
* **Acessibilidade (WCAG 2.1 AA):**
    * Contraste de cores verificado e ajustado.
    * Navegação por teclado funcional com indicadores de foco visíveis.
    * Uso de atributos ARIA para melhorar a semântica de componentes interativos (menu hambúrguer).
    * Implementação de Modo Escuro / Alto Contraste alternável.
* **Otimização (Simulada):** Imagens comprimidas e versões minificadas de CSS/JS criadas (seriam usadas em produção).

## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3 (Variáveis, Grid, Flexbox, Media Queries)
* JavaScript (ES6+, Manipulação do DOM, Fetch API, History API, localStorage)
* Git & GitHub (GitFlow básico, Commits Semânticos, Issues, Milestones, PRs)

## 📂 Estrutura de Pastas
/ (Pasta Raiz: meu_site_legal)
├── css/             # Arquivos CSS (estilos)
│   ├── style.css      # Arquivo principal
│   ├── style.min.css  # Versão minificada (simulada)
│   ├── _reset.css     # Reset de estilos
│   └── _variables.css # Design System
├── images/          # Arquivos de imagem otimizados
│   ├── feliz.png
│   └── ... (outras imagens)
├── js/              # Arquivos JavaScript (interatividade)
│   ├── main.js        # Orquestrador principal
│   ├── main.min.js    # Versão minificada
│   ├── router.js      # Lógica da SPA
│   ├── router.min.js  # Versão minificada
│   ├── validation.js  # Lógica de validação
│   ├── validation.min.js # Versão minificada
│   └── theme-switcher.js # Lógica do modo escuro
│   └── theme-switcher.min.js # Versão minificada
├── docs/            # Documentação (opcional, ex: wireframes)
├── index.html       # Página inicial
├── projetos.html    # Página de projetos/galeria
├── cadastro.html    # Página de cadastro
└── README.md        # Documentação do projeto

## ⚙️ Como Rodar Localmente

1.  Clone este repositório: `git clone https://github.com/arpasqualon/projeto-ong-html.git`
2.  Navegue até a pasta do projeto: `cd projeto-ong-html`
3.  Abra o arquivo `index.html` em seu navegador, preferencialmente utilizando uma extensão como o "Live Server" do VS Code para habilitar a funcionalidade SPA baseada em `fetch`.

## 📝 Workflow Git (GitFlow Simplificado)

* `main`: Contém o código de produção/entrega. Só recebe merges de branches `release` ou `hotfix`.
* `develop`: Branch principal de desenvolvimento. Recebe merges de branches `feature`.
* `feature/*`: Branches criadas a partir da `develop` para desenvolver novas funcionalidades (ex: `feature/accessibility`). São mescladas de volta na `develop` via Pull Request.
* `release/*`: Branches criadas a partir da `develop` para preparar uma nova versão de produção (ex: `release/v1.0.0`). Nela ocorrem os últimos testes e otimizações (como minificação). São mescladas na `main` e na `develop`.

Este projeto utilizou Issues para rastrear tarefas e Pull Requests para integrar as features na branch `develop`.

---
*Projeto desenvolvido como parte da disciplina de Front-end no curso de Análise e Desenvolvimento de Sistemas.*