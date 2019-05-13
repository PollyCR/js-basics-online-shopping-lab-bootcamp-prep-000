var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}


function addToCart(item) {
  var itemAndPrice = {};
  var price = Math.floor(Math.random() * 100)+1;
  itemAndPrice[item] = price;
  cart.push(itemAndPrice);
  console.log(item + " has been added to your cart.");
  return cart;


}

function viewCart(){
   if (cart.length === 0){
     console.log("Your shopping cart is empty.")
   } else {  
     var string = "In your cart, you have ";

  if (cart.length === 1) {
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
    string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  } else {
    for (var i=0; i<cart.length; i++) {
      var text;
      if (i === cart.length - 2){
          text = ", and ";
      } else if (i === cart.length - 1) {
          text = "";
      } else {
          text = ", ";
      }
      string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + text + `${i === cart.length - 1 ? '.' : ''}`;
    }
  }
  }

  return console.log(string);
}
function removeFromCart(item){
    for (var i=0; i<cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)];
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function total() {
    var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cart[i][Object.keys(cart[i])];
  }
  return sum;
}
function placeOrder(cardNumber) {
}

