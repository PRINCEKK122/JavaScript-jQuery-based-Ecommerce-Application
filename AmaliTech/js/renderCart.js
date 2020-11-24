const { color, size, quantity, price, nameOfProduct, imageURL } = JSON.parse(
  localStorage.getItem('userChoices')
);

const totalPrice = quantity * price;

domSelectorsCart().productName.innerText = nameOfProduct;
domSelectorsCart().productColor.innerHTML = `<strong>Color</strong> ${color}`;
domSelectorsCart().productSize.innerHTML = ` <strong>Size</strong> ${size}`;
domSelectorsCart().productQuantity.innerText = quantity;
domSelectorsCart().unitPrice.innerHTML = `GH&cent; ${price}`;
domSelectorsCart().totalPrice.innerHTML = `GH&cent; ${totalPrice}`;
domSelectorsCart().subTotal.innerHTML = `GH&cent; ${totalPrice}`;
domSelectorsCart().estimatedTotal.innerHTML = `GH&cent; ${totalPrice}`;
domSelectorsCart().imageUrl.setAttribute('src', imageURL);
