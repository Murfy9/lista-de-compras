let listaDeItens = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  salvarItens();
});

function salvarItens() {
  const comprasItem = itensInput.value;

  listaDeItens.push({
    valor: comprasItem,
  });

  console.log(listaDeItens);
}
