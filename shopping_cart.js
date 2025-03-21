const handleAddToCart = () =>{
  const productName = document.getElementById('product-name');
  const productQuantity = document.getElementById('product-quantity');

  const name = productName.value;
  const quantity = productQuantity.value;
  
  displayProductCart(name, quantity);

  // clear the input fields in ui
  productName.value ="";
  productQuantity.value = "";
}

const displayProductCart = (productName, productQuantity) =>{
  const container = document.getElementById('product-container');
  const li = document.createElement('li');
  
  li.innerText = `${productName} : ${productQuantity}`;
  
  if (productName && productQuantity) {
    container.appendChild(li);
    setLocalStorage(productName, productQuantity);
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
  console.log(JSON.stringify(cart));
  localStorage.setItem("cart",JSON.stringify(cart));
}