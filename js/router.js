// =================================================================
// ARQUIVO DO ROTEADOR SPA - router.js (VERSÃO FINAL CORRIGIDA PARA O SERVIDOR RAIZ)
// =================================================================

/**
 * O "mapa" do nosso site. Agora ele usa caminhos relativos simples,
 * pois o servidor está rodando na pasta raiz do projeto.
 */
const routes = {
    '/': 'index.html',
    '/index.html': 'index.html',
    '/projetos.html': 'projetos.html',
    '/cadastro.html': 'cadastro.html',
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];

    if (!route) return;

    const response = await fetch(route);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const mainContentElement = doc.querySelector('#app-root');

    if (mainContentElement) {
        document.querySelector('#app-root').innerHTML = mainContentElement.innerHTML;
    } else {
        console.error(`Erro: A tag <main id="app-root"> não foi encontrada no arquivo ${route}.`);
        document.querySelector('#app-root').innerHTML = `<h1>Erro ao carregar conteúdo. Verifique o console (F12).</h1>`;
    }
};

const route = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

window.onpopstate = handleLocation;
window.route = route;
window.handleLocation = handleLocation;