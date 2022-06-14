let food;
let drink;
let desert;

let foodSelected;

let priceFoodSelected;
let priceFoodSelectedTwo;

/* SELECIONAR COMIDA, BEBIDA E SOBREMESA: */

function selectFood(element) {
  food = element.innerHTML;

  foodSelected = document.querySelector('.food-one h4').innerHTML
  priceFoodSelected = document.querySelectorAll('.price-food span').innerHTML;
  priceFoodSelectedTwo = document.querySelector('.price-food-two span').innerHTML;
 
  let buttonClicked = document.querySelector('.select'); /* peguei o elemento que tem a classe select, por enquanto, nenhum */
  document.querySelector('.actived');

  if (buttonClicked !== null) {     /*se o botao NAO estiver clicado, ele é null. Se estiver clicado, ele NÃO é null. 
  Se estiver clicado, vou remover o selecionado */
    buttonClicked.classList.remove('select'); 
  }

  element.classList.add("select"); 
  element.classList.add("actived"); 

  iconSelected(element, "icon-food");
  checkPreviousSelection();
  searchPriceFood(element);
  searchNameFood(element);
}

let newPriceFood;
let newPriceDrink;
let newPriceDesert;

function searchPriceFood(element) {
  let priceFood = element.children[3].children[0].children[0];
  let priceContent = priceFood.innerHTML;
  let priceReplace = priceContent.replace(",", ".");
  newPriceFood = (Number(priceReplace)).toFixed(2);
}

function searchPriceDrink(element) {
  let priceDrink = element.children[3].children[0].children[0];
  let priceContent = priceDrink.innerHTML;
  let priceReplace = priceContent.replace(",", ".");
  newPriceDrink = (Number(priceReplace)).toFixed(2);
}

function searchPriceDesert(element) {
  let priceDesert = element.children[3].children[0].children[0];
  let priceContent = priceDesert.innerHTML;
  let priceReplace = priceContent.replace(",", ".");
  newPriceDesert = (Number(priceReplace)).toFixed(2);
}

let newNameFood;
let newNameDrink;
let newNameDesert;

function searchNameFood(element) {
  let nameFood = element.children[1];
  newNameFood = nameFood.innerHTML;
}

function searchNameDrink(element) {
  let nameDrink = element.children[1];
  newNameDrink = nameDrink.innerHTML;
}

function searchNameDesert(element) {
  let nameDesert = element.children[1];
  newNameDesert = nameDesert.innerHTML;
}

function selectDrink(element) {
  drink = element.innerHTML;

  let buttonClicked = document.querySelector('.select-drink .select');

  if (buttonClicked !== null) {
    buttonClicked.classList.remove('select');
  } 
  
  element.classList.add("select");

  iconSelected(element, "icon-drink");
  checkPreviousSelection();
  searchPriceDrink(element);
  searchNameDrink(element);
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
  
  iconSelected(element, "icon-desert");
  checkPreviousSelection();
  searchPriceDesert(element);
  searchNameDesert(element);
}


/* ADD O ÍCONE VERDE */

function iconSelected(element, currentIcon) {
  let icon = element.children[3].children[1];
  let elementSelected = document.querySelector(`.${currentIcon}.active-ion-icon`);

  if(elementSelected !== null) {
    elementSelected.classList.remove("active-ion-icon");
  }
 
  icon.classList.add("active-ion-icon");
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

let sumPrices;
function closeOrder() {
  orderWindow = document.querySelector(".new-window").classList.remove("hidden");

  /* COMIDAS - PEGAR NOME ATUAL */
  let firstNameFoodOrder = document.querySelector(".food-confirmation");
  firstNameFoodOrder.innerHTML = `${newNameFood}`;

  /* COMIDAS - PEGAR PREÇO ATUAL */
  let firstPriceFoodOrder = document.querySelector(".price-food-confirmation");
  firstPriceFoodOrder.innerHTML = `${newPriceFood}`;


  /* BEBIDAS - PEGAR NOME ATUAL */
  let firstNameDrinkOrder = document.querySelector(".drink-confirmation");
  firstNameDrinkOrder.innerHTML = `${newNameDrink}`;

  /* BEBIDAS - PEGAR PREÇO ATUAL */
  let firstPriceDrinkOrder = document.querySelector(".price-drink-confirmation");
  firstPriceDrinkOrder.innerHTML = `${newPriceDrink}`;


  /* SOBREMESAS - PEGAR NOME ATUAL */
  let firstNameDesertOrder = document.querySelector(".desert-confirmation");
  firstNameDesertOrder.innerHTML = `${newNameDesert}`;

  /* SOBREMESAS - PEGAR PREÇO ATUAL */
  let firstPriceDesertOrder = document.querySelector(".price-desert-confirmation");
  firstPriceDesertOrder.innerHTML = `${newPriceDesert}`;

  /* SOMA DOS PREÇOS DOS PEDIDOS ESCOLHIDOS */
  sumPrices = (Number(newPriceFood) + Number(newPriceDrink) + Number(newPriceDesert)).toFixed(2);
  document.querySelector(".total").innerHTML = sumPrices;
}

/* CONFIRMAR E IR PARA O WHATSAPP: */

function yourOrder() {
  document.querySelector(".confirm-or-cancel-buttons button");

  let nameClient = prompt("Digite seu nome: ");
  let adressClient = prompt("Digite seu endereço: ");

  let finalMessage = 
  `
  Olá, gostaria de fazer o pedido: \n\
  - Prato: ${newNameFood} \n\
  - Bebida: ${newNameDrink} \n\
  - Sobremesa: ${newNameDesert} \n\
  Total: R$ ${sumPrices} \n\

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