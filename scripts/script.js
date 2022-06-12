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

  if (buttonClicked !== null) {     /*se o botao NAO estiver clicado, ele é null. Se estiver clicado, ele NÃO é null. 
  Se estiver clicado, vou remover o selecionado */
    buttonClicked.classList.remove('select'); 
  } else {
    
    var functionVerde = iconSelected(element);
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


/* ADD O ÍCONE VERDE */

function iconSelected(element) {
  let icon = document.querySelector(".hidden");

  if(icon !== null) { 
    icon.classList.remove("hidden");
    icon.classList.add("active-ion-icon");
  }

  element.classList.add("hidden");

}


/* SE UM DE CADA ESTIVER SELECIONADO ANTERIORMENTE, BOTÃO FICA VERDE E MUDA ESCRITA: */


/* Chamei a função abaixo dentro das funções anteriores e declarei as variaveis no escopo global e atribui o elemento de cada função ao colocar essas variaveis dentro de cada função */
function checkPreviousSelection() {

  let catchButton = document.querySelector("footer button");

  if(food && drink && desert) {
    catchButton.classList.add("buttonColor");
    catchButton.innerHTML = "Fechar pedido";
  } 
}

/* ABRIR A TELA DE CONFIRMAÇÃO DO PEDIDO */


