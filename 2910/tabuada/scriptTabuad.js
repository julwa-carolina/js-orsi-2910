function gerarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    resultado.innerHTML = "";
  
    if (isNaN(numero)) {
      alert("Digite um número válido.");
      return;
    }
  
    let i = 1;
    while (i <= 10) {
      const item = document.createElement("li");
      item.textContent = `${numero} x ${i} = ${numero * i}`;
      resultado.appendChild(item);
      i++;
    }
  }
  