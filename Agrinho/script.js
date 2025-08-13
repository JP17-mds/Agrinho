
function showHome() {
  document.getElementById('about').classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
  document.getElementById('cart-message').classList.add('hidden');
}


  document.getElementById('about').classList.remove('hidden');
  document.getElementById('home').classList.add('hidden');
  document.getElementById('cart-message').classList.add('hidden');


function addToCart(gameName) {
  const message = document.getElementById('cart-message');
  message.textContent = `${gameName} adicionado ao carrinho! 🛒`;
  message.classList.remove('hidden');

  
  setTimeout(() => {
    message.classList.add('hidden');
  }, 2500);
}
