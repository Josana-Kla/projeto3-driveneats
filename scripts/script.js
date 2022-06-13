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

let foodSelected;
let priceFoodSelected;


/* SELECIONAR COMIDA, BEBIDA E SOBREMESA: */

function selectFood(element) {
  food = element.innerHTML;

  foodSelected = document.querySelector('.food-one h4').innerHTML;
  priceFoodSelected = document.querySelector('.price-food span').innerHTML;
 
  let buttonClicked = document.querySelector('.select'); /* peguei o elemento que tem a classe select, por enquanto, nenhum */
  document.querySelector('.actived');

  if (buttonClicked !== null) {     /*se o botao NAO estiver clicado, ele é null. Se estiver clicado, ele NÃO é null. 
  Se estiver clicado, vou remover o selecionado */
    buttonClicked.classList.remove('select'); 
  }

  element.classList.add("select"); 
  element.classList.add("actived"); 

  iconSelected();
  checkPreviousSelection();
}

let drinkSelected;
let priceDrinkSelected;

function selectDrink(element) {
  drink = element.innerHTML;

  drinkSelected = document.querySelector('.drink-one h4').innerHTML;
  priceDrinkSelected = document.querySelector('.price-drink-one span').innerHTML;

  let buttonClicked = document.querySelector('.select-drink .select');

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");

  
  checkPreviousSelection();
}

let desertSelected;
let priceDesertSelected;

function selectDesert(element) {
  desert = element.innerHTML;

  desertSelected = document.querySelector('.desert-one h4').innerHTML;
  priceDesertSelected = document.querySelector('.price-desert-one span').innerHTML;

  let buttonClicked = document.querySelector('.select-desert .select');

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");

  
  checkPreviousSelection();
}


/* ADD O ÍCONE VERDE */

function iconSelected() {
  document.querySelector(".actived");
  let icon = document.querySelector(".icon");

  if(icon !== null) {
    icon.classList.remove("active-ion-icon");
  }
 
  icon.classList.add("active-ion-icon");
  icon.classList.add("actived");
  /*document.querySelector(".line-options .select ion-icon").classList.add(".select .active-ion-icon");*/
 
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
let orderWindow;

function closeOrder() {
  orderWindow = document.querySelector(".new-window").classList.remove("hidden");

  /* COMIDAS - PEGAR NOMES */
  let firstNameFoodOrder = document.querySelector(".food-confirmation");
  firstNameFoodOrder.innerHTML = `${foodSelected}`;

  /* COMIDAS - PEGAR PREÇOS */
  let firstPriceFoodOrder = document.querySelector(".price-food-confirmation");
  firstPriceFoodOrder.innerHTML = `${priceFoodSelected}`;


  /* BEBIDAS - PEGAR NOMES */
  let firstNameDrinkOrder = document.querySelector(".drink-confirmation");
  firstNameDrinkOrder.innerHTML = `${drinkSelected}`;

  /* BEBIDAS - PEGAR PREÇOS */
  let firstPriceDrinkOrder = document.querySelector(".price-drink-confirmation");
  firstPriceDrinkOrder.innerHTML = `${priceDrinkSelected}`;


  /* SOBREMESAS - PEGAR NOMES */
  let firstNameDesertOrder = document.querySelector(".desert-confirmation");
  firstNameDesertOrder.innerHTML = `${desertSelected}`;

  /* SOBREMESAS - PEGAR PREÇOS */
  let firstPriceDesertOrder = document.querySelector(".price-desert-confirmation");
  firstPriceDesertOrder.innerHTML = `${priceDesertSelected}`;
}

/* CONFIRMAR E IR PARA O WHATSAPP: */

function yourOrder() {
  document.querySelector(".confirm-or-cancel-buttons button");

  let nameClient = prompt("Digite seu nome: ");
  let adressClient = prompt("Digite seu endereço: ");

  let finalMessage = 
  `
  Olá, gostaria de fazer o pedido: \n\
  - Prato: Frango Yin Yang \n\
  - Bebida: Coquinha Gelada \n\
  - Sobremesa: Pudim \n\
  Total: R$ 27.70  \n\

  Nome: ${nameClient}
  Endereço: ${adressClient}
  `;

  let linkAndMessage = "https://wa.me/5534984258067?text=" + encodeURIComponent(finalMessage);
  window.open(linkAndMessage, '_blank');
}

/* CANCELAR E VOLTAR PARA OS PEDIDOS */

function cancel() {
  orderWindow = document.querySelector(".new-window").classList.add("hidden");
}