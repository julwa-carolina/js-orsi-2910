function somarIntervalo() {
    let inicio = parseInt(document.getElementById("inicio").value);
    let fim = parseInt(document.getElementById("fim").value);
    const resultado = document.getElementById("resultado");
  
    resultado.innerHTML = "";
  
    if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
      alert("Digite valores válidos. O início deve ser menor ou igual ao fim.");
      return;
    }
  
    let soma = 0;
    while (inicio <= fim) {
      soma += inicio;
      inicio++;
    }
  
    resultado.innerHTML = `<li>Soma: ${soma}</li>`;
  }
  