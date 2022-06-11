/*
function finalPrice() {
  var firstDish = preçoVindoDoPrato; 
  var drink = preçoVindoDaBebida;
  var desert = preçoVindoDaSobremesa;

  var sum = firstDish + drink + desert;
  alert("O preço final é: " + sum);
}
*/


/* SELECIONAR COMIDA, BEBIDA E SOBREMESA: */

function selectFood(element) {
  let buttonClicked = document.querySelector('.select'); /* peguei o elemento que tem a classe select, por enquanto, nenhum */

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");
}

function selectDrink(element) {
  let buttonClicked = document.querySelector('.select-drink .select');

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");
}

function selectDesert(element) {
  let buttonClicked = document.querySelector('.select-desert .select');

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");
}

/* SE UM DE CADA ESTIVER SELECIONADO ANTERIORMENTE, BOTÃO FICA VERDE E MUDA ESCRITA: */

/*
if(selecao DIV firstDish === 1 && drink === 1 && desert === 1) {
  faz o botão mudar para 'fechar pedido';
}
*/