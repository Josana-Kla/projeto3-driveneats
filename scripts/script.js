/*
function finalPrice() {
  var firstDish = preçoVindoDoPrato; 
  var drink = preçoVindoDaBebida;
  var desert = preçoVindoDaSobremesa;

  var sum = firstDish + drink + desert;
  alert("O preço final é: " + sum);
}
*/

let food;
let drink;
let desert;

/* SELECIONAR COMIDA, BEBIDA E SOBREMESA: */

function selectFood(element) {
  food = element.innerHTML;

  let buttonClicked = document.querySelector('.select'); /* peguei o elemento que tem a classe select, por enquanto, nenhum */

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");

  checkPreviousSelection();
}

function selectDrink(element) {
  drink = element.innerHTML;

  let buttonClicked = document.querySelector('.select-drink .select');

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");

  checkPreviousSelection();
}

function selectDesert(element) {
  desert = element.innerHTML;

  let buttonClicked = document.querySelector('.select-desert .select');

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");

  checkPreviousSelection();
}

/* SE UM DE CADA ESTIVER SELECIONADO ANTERIORMENTE, BOTÃO FICA VERDE E MUDA ESCRITA: */

/*
if(selecao DIV firstDish === 1 && drink === 1 && desert === 1) {
  faz o botão mudar para 'fechar pedido';
}
*/
/*Chamei a função abaixo dentro das funções anteriores */
function checkPreviousSelection() {

  let catchButton = document.querySelector("footer button");

  if(food && drink && desert) {
    catchButton.classList.add("select");
    catchButton.innerHTML = "opaaa";
  } 

}