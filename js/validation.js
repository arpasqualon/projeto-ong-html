// =================================================================
// ARQUIVO DE VALIDAÇÃO DE FORMULÁRIO - validation.js
// Responsável por verificar os dados do formulário de cadastro
// e exibir mensagens de erro customizadas para o usuário.
// =================================================================

/**
 * Função principal que inicia a lógica de validação.
 * Ela encontra o formulário na página e adiciona os "ouvintes" de eventos.
 */
function setupFormValidation() {
    const form = document.querySelector('form');

    // Se não encontrarmos um formulário na página atual, a função para por aqui.
    if (!form) {
        return;
    }

    // Adiciona um "ouvinte" para o evento de 'submit' do formulário.
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de recarregar a página ao enviar.
        event.preventDefault();

        // Chama nossa função principal de validação.
        const isFormValid = validateAllFields();

        if (isFormValid) {
            // Se tudo estiver correto, exibe uma mensagem de sucesso.
            alert('Cadastro enviado com sucesso!');
            form.reset(); // Limpa todos os campos do formulário.
            clearAllErrors(); // Garante que as bordas vermelhas sumam.
        } else {
            // Se houver erros, avisa o usuário.
            alert('Por favor, corrija os campos destacados em vermelho.');
        }
    });
}

/**
 * Função que executa a validação para todos os campos do formulário.
 * Retorna 'true' se todos os campos forem válidos, e 'false' caso contrário.
 */
function validateAllFields() {
    let isValid = true; // Começamos assumindo que o formulário é válido.

    // Usamos o operador &= que faz com que, se 'isValid' já for falso, ele continue falso.
    isValid &= validateRequiredField('nome', 'O campo Nome Completo é obrigatório.');
    isValid &= validateEmail('email', 'Por favor, insira um e-mail em formato válido (ex: email@dominio.com).');
    isValid &= validatePatternField('cpf', 'Por favor, insira um CPF no formato 000.000.000-00.');
    isValid &= validatePatternField('telefone', 'Por favor, insira um telefone no formato (00) 00000-0000.');
    isValid &= validateRequiredField('nascimento', 'O campo Data de Nascimento é obrigatório.');
    isValid &= validatePatternField('cep', 'Por favor, insira um CEP no formato 00000-000.');
    isValid &= validateRequiredField('endereco', 'O campo Endereço é obrigatório.');
    isValid &= validateRequiredField('cidade', 'O campo Cidade é obrigatório.');
    isValid &= validateRequiredField('estado', 'O campo Estado é obrigatório.');

    return isValid;
}

// --- FUNÇÕES DE VALIDAÇÃO ESPECÍFICAS ---

/** Verifica se um campo obrigatório não está vazio. */
function validateRequiredField(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!field || field.value.trim() === '') {
        showError(field, errorMessage);
        return false;
    }
    clearError(field);
    return true;
}

/** Verifica se o formato do e-mail é válido. */
function validateEmail(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!field) return false;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(field.value)) {
        showError(field, errorMessage);
        return false;
    }
    clearError(field);
    return true;
}

/** Verifica se o campo corresponde ao 'pattern' definido no HTML. */
function validatePatternField(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!field) return false;

    // A função checkValidity() do próprio navegador testa o 'pattern' para nós.
    if (!field.checkValidity() || field.value.trim() === '') {
        showError(field, errorMessage);
        return false;
    }
    clearError(field);
    return true;
}


// --- FUNÇÕES AUXILIARES DE FEEDBACK VISUAL ---

/** Exibe a mensagem de erro e muda a cor da borda do campo. */
function showError(inputElement, message) {
    if (!inputElement) return;
    // O 'nextElementSibling' pega o elemento irmão seguinte, que é o nosso <span> de erro.
    const errorSpan = inputElement.nextElementSibling.nextElementSibling; // Pula o <br>
    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.textContent = message;
    }
    inputElement.style.borderColor = 'red';
}

/** Limpa a mensagem de erro e restaura a cor da borda. */
function clearError(inputElement) {
    if (!inputElement) return;
    const errorSpan = inputElement.nextElementSibling.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.textContent = '';
    }
    inputElement.style.borderColor = ''; // Volta à cor padrão do CSS
}

/** Limpa todos os erros do formulário, usado após o envio com sucesso. */
function clearAllErrors() {
    document.querySelectorAll('form input').forEach(input => {
        clearError(input);
    });
}
// =================================================================
// ARQUIVO DE VALIDAÇÃO DE FORMULÁRIO - validation.js
// Responsável por verificar os dados do formulário de cadastro
// e exibir mensagens de erro customizadas para o usuário.
// =================================================================

/**
 * Função principal que inicia a lógica de validação.
 * Ela encontra o formulário na página e adiciona os "ouvintes" de eventos.
 */
function setupFormValidation() {
    const form = document.querySelector('form');

    // Se não encontrarmos um formulário na página atual, a função para por aqui.
    if (!form) {
        return;
    }

    // Adiciona um "ouvinte" para o evento de 'submit' do formulário.
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de recarregar a página ao enviar.
        event.preventDefault();

        // Chama nossa função principal de validação.
        const isFormValid = validateAllFields();

        if (isFormValid) {
            // Se tudo estiver correto, exibe uma mensagem de sucesso.
            alert('Cadastro enviado com sucesso!');
            form.reset(); // Limpa todos os campos do formulário.
            clearAllErrors(); // Garante que as bordas vermelhas sumam.
        } else {
            // Se houver erros, avisa o usuário.
            alert('Por favor, corrija os campos destacados em vermelho.');
        }
    });
}

/**
 * Função que executa a validação para todos os campos do formulário.
 * Retorna 'true' se todos os campos forem válidos, e 'false' caso contrário.
 */
function validateAllFields() {
    let isValid = true; // Começamos assumindo que o formulário é válido.

    // Usamos o operador &= que faz com que, se 'isValid' já for falso, ele continue falso.
    isValid &= validateRequiredField('nome', 'O campo Nome Completo é obrigatório.');
    isValid &= validateEmail('email', 'Por favor, insira um e-mail em formato válido (ex: email@dominio.com).');
    isValid &= validatePatternField('cpf', 'Por favor, insira um CPF no formato 000.000.000-00.');
    isValid &= validatePatternField('telefone', 'Por favor, insira um telefone no formato (00) 00000-0000.');
    isValid &= validateRequiredField('nascimento', 'O campo Data de Nascimento é obrigatório.');
    isValid &= validatePatternField('cep', 'Por favor, insira um CEP no formato 00000-000.');
    isValid &= validateRequiredField('endereco', 'O campo Endereço é obrigatório.');
    isValid &= validateRequiredField('cidade', 'O campo Cidade é obrigatório.');
    isValid &= validateRequiredField('estado', 'O campo Estado é obrigatório.');

    return isValid;
}

// --- FUNÇÕES DE VALIDAÇÃO ESPECÍFICAS ---

/** Verifica se um campo obrigatório não está vazio. */
function validateRequiredField(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!field || field.value.trim() === '') {
        showError(field, errorMessage);
        return false;
    }
    clearError(field);
    return true;
}

/** Verifica se o formato do e-mail é válido. */
function validateEmail(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!field) return false;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(field.value)) {
        showError(field, errorMessage);
        return false;
    }
    clearError(field);
    return true;
}

/** Verifica se o campo corresponde ao 'pattern' definido no HTML. */
function validatePatternField(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    if (!field) return false;

    // A função checkValidity() do próprio navegador testa o 'pattern' para nós.
    if (!field.checkValidity() || field.value.trim() === '') {
        showError(field, errorMessage);
        return false;
    }
    clearError(field);
    return true;
}


// --- FUNÇÕES AUXILIARES DE FEEDBACK VISUAL ---

/** Exibe a mensagem de erro e muda a cor da borda do campo. */
function showError(inputElement, message) {
    if (!inputElement) return;
    // O 'nextElementSibling' pega o elemento irmão seguinte, que é o nosso <span> de erro.
    const errorSpan = inputElement.nextElementSibling.nextElementSibling; // Pula o <br>
    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.textContent = message;
    }
    inputElement.style.borderColor = 'red';
}

/** Limpa a mensagem de erro e restaura a cor da borda. */
function clearError(inputElement) {
    if (!inputElement) return;
    const errorSpan = inputElement.nextElementSibling.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.textContent = '';
    }
    inputElement.style.borderColor = ''; // Volta à cor padrão do CSS
}

/** Limpa todos os erros do formulário, usado após o envio com sucesso. */
function clearAllErrors() {
    document.querySelectorAll('form input').forEach(input => {
        clearError(input);
    });
}