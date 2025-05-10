function verificarCompatibilidade() {
  const placaMae = document.getElementById("placa-mae").value;
  const processador = document.getElementById("processador").value;
  const ram = document.getElementById("ram").value;
  const gpu = document.getElementById("gpu").value;
  const resultado = document.getElementById("resultado");

  // Verificação de preenchimento
  if (!placaMae || !processador || !ram || !gpu) {
    exibirResultado("Por favor, selecione todos os componentes.", false);
    return;
  }

  // Verificação de compatibilidade entre placa-mãe e processador
  if (placaMae !== processador) {
    exibirResultado("Incompatibilidade: O processador não é compatível com a placa-mãe selecionada.", false);
    return;
  }

  // Sucesso
  exibirResultado("Todos os componentes são compatíveis! Você pode montar seu PC com segurança. 🎉", true);
}

function exibirResultado(mensagem, sucesso) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<p>${mensagem}</p>`;
  resultado.style.backgroundColor = sucesso ? "#16a34a" : "#b91c1c";
  resultado.style.color = "#ffffff";
  resultado.style.borderRadius = "0.5rem";
  resultado.style.padding = "1rem";
}


  
