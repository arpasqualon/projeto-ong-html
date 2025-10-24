// Lógica para Alternar o Tema (Modo Claro/Escuro)
function setupThemeSwitcher() {
    const toggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    if (!toggleButton) return; // Se o botão não existe, não faz nada

    // Verifica se há um tema salvo no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = "Alternar para Modo Claro"; // Atualiza texto do botão
    } else {
         toggleButton.textContent = "Alternar para Modo Escuro"; // Texto padrão
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Salva a preferência no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = "Alternar para Modo Claro";
        } else {
            localStorage.setItem('theme', 'light');
             toggleButton.textContent = "Alternar para Modo Escuro";
        }
    });
}

// Exporta a função para ser chamada pelo main.js (ou executa direto se não usar módulos)
// Se estivermos usando scripts simples (como estamos):
setupThemeSwitcher();