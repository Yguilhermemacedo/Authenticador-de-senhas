// Capturando elementos do DOM
const senhaInput = document.getElementById("senha");
const confirmaSenhaInput = document.getElementById("confirma__senha");
const botaoValidar = document.getElementById("btn-confirmar");

// Elementos de aviso e ícones
const avisoValidacao = document.querySelector(".aviso__validacao");
const avisoConfirmacao = document.querySelector(".aviso__confirmacao");
const iconeValidacao = document.querySelector(".icone__validacao");
const iconeConfirmacao = document.querySelector(".icone__confirmacao i");

// Expressão regular para validar senha
const senhaForteRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

// Função para validar a senha
function validarSenha() {
    const senha = senhaInput.value;

    if (senhaForteRegex.test(senha)) {
        avisoValidacao.textContent = "Senha válida ✅";
        avisoValidacao.style.color = "green";
        iconeValidacao.textContent = "✔";
        iconeValidacao.style.color = "green";
        return true;
    } else {
        avisoValidacao.textContent = "A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula e 1 número.";
        avisoValidacao.style.color = "red";
        iconeValidacao.textContent = "❌";
        iconeValidacao.style.color = "red";
        return false;
    }
}

// Função para validar a confirmação da senha
function validarConfirmacao() {
    if (confirmaSenhaInput.value === senhaInput.value && senhaInput.value !== "") {
        avisoConfirmacao.textContent = "As senhas coincidem ✅";
        avisoConfirmacao.style.color = "green";
        iconeConfirmacao.classList.replace("bx-x", "bx-check");
        iconeConfirmacao.style.color = "green";
        return true;
    } else {
        avisoConfirmacao.textContent = "As senhas não coincidem ❌";
        avisoConfirmacao.style.color = "red";
        iconeConfirmacao.classList.replace("bx-check", "bx-x");
        iconeConfirmacao.style.color = "red";
        return false;
    }
}

// Evento para validar a senha ao digitar
senhaInput.addEventListener("input", validarSenha);

// Evento para validar a confirmação ao digitar
confirmaSenhaInput.addEventListener("input", validarConfirmacao);

// Evento ao clicar no botão de validar senha
botaoValidar.addEventListener("click", (e) => {
    e.preventDefault(); // Evita recarregar a página

    if (validarSenha() && validarConfirmacao()) {
        alert("Senha validada com sucesso!");
    } else {
        alert("Corrija os erros antes de prosseguir.");
    }
});
