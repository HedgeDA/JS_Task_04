
function addClick(event) {
  cart = document.querySelector('div.cart');

  if (!cart.hasAttribute('data-count')) {
    cart.setAttribute('data-count', 0);
  }
  if (!cart.hasAttribute('data-total-price')) {
    cart.setAttribute('data-total-price', 0);
  }

  cart.dataset.count = Number(cart.dataset.count) + 1;
  cart.dataset.totalPrice = Number(cart.dataset.totalPrice) + Number(event.target.dataset.price);

  cartCount = document.getElementById('cart-count');
  cartCount.innerText = cart.dataset.count;

  cartTotalPrice = document.getElementById('cart-total-price');
  cartTotalPrice.innerText = getPriceFormatted(cart.dataset.totalPrice);
}

function init() {
  container = document.getElementById('container');
  container.querySelectorAll('button.add').forEach((button) => button.addEventListener('click', addClick))
}

document.addEventListener('DOMContentLoaded', init);
