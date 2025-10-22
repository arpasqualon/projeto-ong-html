// =================================================================
// ARQUIVO DO ROTEADOR SPA - router.js 
// =================================================================

const routes = {
    '/': 'index.html',
    '/index.html': 'index.html',
    '/projetos.html': 'projetos.html',
    '/cadastro.html': 'cadastro.html',
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];

    if (!route) {
        console.error(`Nenhuma rota encontrada para ${path}`);
        return;
    }

    try {
        const response = await fetch(route);
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status} ao buscar ${route}`);
        }
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const mainContentElement = doc.querySelector('#app-root');

        if (mainContentElement) {
            // Remove scripts antes de injetar para evitar re-execução
            const scriptsInsideMain = mainContentElement.querySelectorAll('script');
            scriptsInsideMain.forEach(script => script.remove());

            const contentToInject = mainContentElement.innerHTML;
            const targetElement = document.querySelector('#app-root');

            if (targetElement) {
                targetElement.innerHTML = contentToInject;
            } else {
                 console.error("ERRO CRÍTICO: Não encontrou o #app-root na PÁGINA ATUAL!");
            }
        } else {
            console.error(`ERRO GRAVE: A tag <main id="app-root"> NÃO foi encontrada no arquivo ${route}.`);
            const targetElement = document.querySelector('#app-root');
             if (targetElement) {
                targetElement.innerHTML = `<h1>Erro Crítico</h1><p>Não foi possível encontrar a área de conteúdo (<code>#app-root</code>) no arquivo <code>${route}</code>.</p>`;
             }
        }
    } catch (error) {
        console.error('ERRO GERAL durante o fetch ou processamento da rota:', error);
         const targetElement = document.querySelector('#app-root');
         if (targetElement) {
            targetElement.innerHTML = `<h1>Erro Inesperado</h1><p>Ocorreu um problema ao carregar a página: ${error.message}</p>`;
         }
    }
};

const route = (event) => {
    event.preventDefault();
    const targetLink = event.target.closest('a');
    if (!targetLink) return;

    window.history.pushState({}, "", targetLink.href);
    handleLocation();
};

window.onpopstate = handleLocation;
window.route = route;
window.handleLocation = handleLocation; // Exposto para main.js