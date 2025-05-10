// Dados simulados
const processadores = [
    { nome: "Ryzen 5 5600X", soquete: "am4", consumo: 65 },
    { nome: "Intel i5 12400F", soquete: "lga1700", consumo: 65 }
  ];
  
  const placasMae = [
    {
      nome: "ASUS B550",
      soquetes: ["am4"],
      memorias: ["ddr4"],
      frequencias: [2666, 3200],
      ssdSuportado: ["sata", "m2"]
    },
    {
      nome: "Gigabyte Z690",
      soquetes: ["lga1700"],
      memorias: ["ddr5"],
      frequencias: [4800],
      ssdSuportado: ["m2"]
    }
  ];
  
  const memorias = [
    { nome: "Corsair 16GB DDR4 3200", tipo: "ddr4", frequencia: 3200, consumo: 5 },
    { nome: "Kingston 16GB DDR5 4800", tipo: "ddr5", frequencia: 4800, consumo: 5 }
  ];
  
  const ssds = [
    { nome: "Kingston SATA 480GB", tipo: "sata", consumo: 5 },
    { nome: "Samsung M.2 NVMe 1TB", tipo: "m2", consumo: 7 }
  ];
  
  const fontes = [
    { nome: "Fonte 400W", potencia: 400 },
    { nome: "Fonte 500W", potencia: 500 },
    { nome: "Fonte 650W", potencia: 650 }
  ];
  
  // Elementos
  const sel = id => document.getElementById(id);
  const mensagemDiv = sel("mensagem");
  
  // Util
  function popularSelect(select, lista) {
    select.innerHTML = "<option value=''>Selecione</option>";
    lista.forEach((item, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = item.nome;
      select.appendChild(opt);
    });
  }
  
  // Popular processador inicialmente
  popularSelect(sel("processador"), processadores);
  
  // Eventos em cadeia
  sel("processador").addEventListener("change", () => {
    const proc = processadores[sel("processador").value];
    const placasCompat = placasMae.filter(p => p.soquetes.includes(proc.soquete));
    popularSelect(sel("placaMae"), placasCompat);
    reset(["memoria", "ssd", "fonte"]);
    mensagemDiv.textContent = "";
  });
  
  sel("placaMae").addEventListener("change", () => {
    const placa = placasMae[sel("placaMae").value];
    const memsCompat = memorias.filter(m =>
      placa.memorias.includes(m.tipo) && placa.frequencias.includes(m.frequencia)
    );
    popularSelect(sel("memoria"), memsCompat);
    reset(["ssd", "fonte"]);
    mensagemDiv.textContent = "";
  });
  
  sel("memoria").addEventListener("change", () => {
    const placa = placasMae[sel("placaMae").value];
    const ssdsCompat = ssds.filter(s => placa.ssdSuportado.includes(s.tipo));
    popularSelect(sel("ssd"), ssdsCompat);
    reset(["fonte"]);
    mensagemDiv.textContent = "";
  });
  
  sel("ssd").addEventListener("change", () => {
    popularSelect(sel("fonte"), fontes);
    mensagemDiv.textContent = "";
  });
  
  sel("fonte").addEventListener("change", () => {
    // Soma de consumo
    const p = processadores[sel("processador").value];
    const m = memorias[sel("memoria").value];
    const ssd = ssds[sel("ssd").value];
    const fonte = fontes[sel("fonte").value];
    const consumoTotal = p.consumo + m.consumo + ssd.consumo + 50; // margem extra para placa-mãe e periféricos
  
    if (fonte.potencia >= consumoTotal) {
      mensagemDiv.style.color = "green";
      mensagemDiv.textContent = `Tudo compatível! Consumo estimado: ${consumoTotal}W. Fonte: ${fonte.potencia}W ✅`;
    } else {
      mensagemDiv.style.color = "red";
      mensagemDiv.textContent = `⚠️ Fonte insuficiente! Consumo: ${consumoTotal}W > ${fonte.potencia}W`;
    }
  });
  
  // Util para resetar selects
  function reset(ids) {
    ids.forEach(id => {
      sel(id).innerHTML = "<option value=''>Selecione</option>";
    });
  }
<form id="formulario">
  <input type="text" id="campo" placeholder="Digite algo" class="border p-2">
  <button type="submit" class="bg-blue-500 text-white px-4 py-2">Enviar</button>
</form>

<script>
  document.getElementById("formulario").addEventListener("submit", function(event) {
    const campo = document.getElementById("campo").value;
    if (!campo) {
      alert("Por favor, preencha o campo.");
      event.preventDefault();
    }
  });
</script>

  
