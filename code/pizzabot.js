const Vegetarian = "Vegetarian Pizza";
const Hawaiian = "Hawaiian Pizza";
const Pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// Meddelande om menyn

let message = `Hey! Happy to serve your pizza. On our menu we have ${Vegetarian}, ${Hawaiian} and ${Pepperoni}`;
alert(message);

let orderName = prompt(
  `Enter the name of the pizza you want to order today`
).toLowerCase();
let orderQuantity = prompt(`How many of ${orderName} do you want?`);

if (
  orderName === Vegetarian.toLowerCase() ||
  orderName === Hawaiian.toLowerCase() ||
  orderName === Pepperoni.toLowerCase()
) {
  return orderQuantit;
} else {
  alert(`sorry we dont have `);
}

//let orderQuantity = prompt(`How many of ${orderName} do you want?`);
// console.log(orderQuantity);
let orderTotal = pizzaPrice * orderQuantity;
if (orderQuantity >= 1 && orderQuantity <= 2) {
  alert(
    `Great, Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr The pizzas will take 10 minutes.`
  );
} else if (orderQuantity >= 2 && orderQuantity <= 5) {
  alert(
    `Great, Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr The pizzas will take 15 minutes.`
  );
} else if (orderQuantity >= 6 && orderQuantity <= 15) {
  alert(
    `Great, Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr The pizzas will take 20 minutes.`
  );
}

function checkOrderName(orderName) {
  return (
    orderName === Vegetarian.toLowerCase() ||
    orderName === Hawaiian.toLowerCase() ||
    orderName === Pepperoni.toLowerCase()
  );
}

let orderName = prompt(
  `Enter the name of the pizza you want to order today`
).toLowerCase();

if (checkOrderName(orderName)) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);
  console.log(`You have ordered ${orderQuantity} ${orderName} pizzas.`);
}
if (!checkOrderName(orderName)) {
  console.log("Sorry, we don't have this pizza on the menu.");
}

function totalCost(orderQuantity) {
  return pizzaPrice * orderQuantity; // Beräknar den totala kostnaden
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10; // 10 minuter för 1-2 pizzor
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15; // 15 minuter för 3-5 pizzor
  } else if (orderQuantity >= 6 && orderQuantity <= 15) {
    return 20; // 20 minuter för 6-15 pizzor
  } else if (orderQuantity > 15) {
    return 30; // 30 minuter för mer än 15 pizzor
  } else {
    return 0; // Om ogiltig mängd beställs
  }
}
