// =================================================================
// ARQUIVO PRINCIPAL (ORQUESTRADOR) - main.js
// Responsável por iniciar os outros scripts no momento certo.
// =================================================================

/**
 * Função principal que é executada quando o DOM (a estrutura da página)
 * está completamente carregado.
 */
function initializeApp() {
    // 1. Configura os links de navegação para funcionarem com o nosso roteador SPA.
    // Isso garante que os cliques nos links não recarreguem a página.
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            // Chama a função 'route' que criamos no router.js
            window.route(event);
        });
    });

    // 2. Garante que a lógica de validação seja ativada após cada mudança de rota.
    // Esta é a parte mais importante.
    const originalHandleLocation = window.handleLocation;
    window.handleLocation = async () => {
        // Primeiro, executa a função original para carregar o conteúdo da página.
        await originalHandleLocation();

        // DEPOIS que o novo conteúdo está na tela, procuramos por um formulário
        // e ativamos a lógica de validação nele.
        setupFormValidation();
    };

    // 3. Carrega o conteúdo da rota inicial quando a página é aberta pela primeira vez.
    window.handleLocation();
}


// Ouve o evento que indica que o HTML da página foi completamente carregado.
// Apenas depois disso, executa nossa função principal.
document.addEventListener('DOMContentLoaded', initializeApp);