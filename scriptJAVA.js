function verificarCompatibilidade() {
  const placaMae = document.getElementById("placa-mae").value;
  const processador = document.getElementById("processador").value;
  const ram = document.getElementById("ram").value;
  const gpu = document.getElementById("gpu").value;
  const resultado = document.getElementById("resultado");

  if (!placaMae || !processador || !ram || !gpu) {
    exibirResultado("Por favor, selecione todos os componentes.", false);
    return;
  }

  if (placaMae !== processador) {
    exibirResultado("Incompatibilidade: O processador não é compatível com a placa-mãe.", false);
    return;
  }

  exibirResultado("✔ Todos os componentes são compatíveis! Você pode montar seu PC com segurança!", true);
}

function exibirResultado(mensagem, sucesso) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<p>${mensagem}</p>`;
  resultado.style.backgroundColor = sucesso ? "#16a34a" : "#dc2626";
  resultado.style.color = "#ffffff";
  resultado.style.borderRadius = "0.5rem";
  resultado.style.padding = "1rem";
}

// Cadastro de e-mail
function cadastrarEmail() {
  const emailInput = document.getElementById("email");
  const mensagem = document.getElementById("mensagem-email");
  const email = emailInput.value.trim();

  if (!email || !validarEmail(email)) {
    mensagem.textContent = "Por favor, insira um e-mail válido.";
    mensagem.style.color = "#f87171"; // vermelho claro
    return;
  }

  mensagem.textContent = "✅ E-mail cadastrado com sucesso! Você será notificado.";
  mensagem.style.color = "#34d399"; // verde claro
  emailInput.value = "";
}

function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

  
