const handleAddToCart = () =>{
  const productName = document.getElementById('product-name');
  const productQuantity = document.getElementById('product-quantity');

  const name = productName.value;
  const quantity = productQuantity.value;
  
  setLocalStorage(name, quantity);
  displayProductCart(); //show updated cart
  // clear the input fields in ui
  productName.value ="";
  productQuantity.value = "";
}

const displayProductCart = () =>{
  const cartJSON = localStorage.getItem('cart');
  const cart = JSON.parse(cartJSON);

  const ul = document.getElementById('product-container');
  ul.innerHTML = "";
  // console.log(cart);
  for(let product in cart){
    const li = document.createElement('li');
    li.innerText = `${product} : ${cart[product]}`;
    ul.appendChild(li);
  }
}

const getLocalStorage = () =>{
  let cart = {};
  const product = localStorage.getItem('cart');
  if(product) {
    cart = JSON.parse(product);
  }

  return cart;
}

//need to add to local storage every time a user adds an item to cart so that we dont lose the data if user closes the window
const setLocalStorage = (productName, productQuantity) =>{
  const cart = getLocalStorage();
  
  cart[productName] = productQuantity;
  // console.log(JSON.stringify(cart));
  localStorage.setItem("cart",JSON.stringify(cart));
}

displayProductCart(); //auto display the cart 