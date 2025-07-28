const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let nomes = [];

function adicionarAmigo() {
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  if (nomes.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    input.value = "";
    input.focus();
    return;
  }

  nomes.push(nome);
  input.value = "";
  input.focus();

  // Atualiza a lista com innerHTML
  listaAmigos.innerHTML = "";

  for (let i = 0; i < nomes.length; i++) {
    listaAmigos.innerHTML += `<li>${nomes[i]}</li>`;
  }
}

function sortearAmigo() {
  if (nomes.length < 2) {
    alert("Adicione pelo menos dois nomes para fazer o sorteio!");
    return;
  }

  const nomesSorteados = embaralharArray([...nomes]);
  const resultadoFinal = [];

  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nomesSorteados[i]) {
      return sortearAmigo(); // Repetiu? Refaz o sorteio
    }
    resultadoFinal.push(`${nomes[i]} ➡️ ${nomesSorteados[i]}`);
  }

  resultado.innerHTML = "";
  resultadoFinal.forEach((linha) => {
    const li = document.createElement("li");
    li.textContent = linha;
    resultado.appendChild(li);
  });
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function limparTudo() {
  nomes = [];
  listaAmigos.innerHTML = "";
  resultado.innerHTML = "";
  input.value = "";
  input.focus();
}
