// =================================================================
// ARQUIVO PRINCIPAL - main.js
// =================================================================

// Cria um "guarda" para garantir que a inicialização só ocorra uma vez.
if (
  typeof window.isAppInitialized === "undefined" ||
  !window.isAppInitialized
) {
  console.log("main.js: Primeira inicialização. Configurando o app...");

  /**
   * Função principal que é executada quando o DOM está carregado.
   */
  function initializeApp() {
    console.log("initializeApp: Configurando links de navegação...");
    // 1. Configura os links de navegação para funcionarem com o nosso roteador SPA.
    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (window.route) {
          window.route(event);
        } else {
          console.error(
            "Erro: A função window.route (do router.js) não foi encontrada!"
          );
        }
      });
    });
    console.log("initializeApp: Links configurados.");

    // 2. Modifica a função handleLocation original para SEMPRE reativar a validação DEPOIS.
    if (window.handleLocation) {
      console.log(
        "initializeApp: Modificando handleLocation para incluir validação..."
      );
      const originalHandleLocation = window.handleLocation;
      window.handleLocation = async () => {
        console.log(
          "handleLocation (Wrapper): Iniciando carregamento original..."
        );
        await originalHandleLocation();
        console.log(
          "handleLocation (Wrapper): Conteúdo carregado. Tentando ativar validação..."
        );
        if (typeof setupFormValidation === "function") {
          setupFormValidation();
          console.log(
            "handleLocation (Wrapper): setupFormValidation foi chamada."
          );
        } else {
          console.warn(
            "handleLocation (Wrapper): Função setupFormValidation não encontrada."
          );
        }
      };
      console.log("initializeApp: handleLocation modificado.");

      // 3. CHAMA a função handleLocation (já modificada) pela primeira vez AQUI.
      console.log(
        "initializeApp: Chamando handleLocation pela primeira vez..."
      );
      window.handleLocation();
    } else {
      console.error(
        "ERRO CRÍTICO: router.js não parece ter carregado window.handleLocation a tempo!"
      );
    }
  }

  // Ouve o evento DOMContentLoaded e executa nossa função de inicialização.
  console.log("main.js: Aguardando DOMContentLoaded...");
  document.addEventListener("DOMContentLoaded", initializeApp);

  // Marca que o app foi inicializado para prevenir re-execução.
  window.isAppInitialized = true;
  console.log("main.js: App marcado como inicializado.");
} else {
  // Se o app já foi inicializado, apenas loga uma mensagem e não faz mais nada.
  console.warn("main.js: Tentativa de re-inicialização bloqueada pelo guarda.");
}
