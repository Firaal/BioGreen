// carousel

let indexAtual = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function mostraProxItem() {
    items[indexAtual].classList.remove("active");
    indexAtual = (indexAtual + 1) % totalItems;
    items[indexAtual].classList.add("active");
}

setInterval(mostraProxItem, 5000);

// card button

document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Atualiza o contador do carrinho no menu de navegação
            const cartQuantity = document.getElementById("cart-quantity");
            cartQuantity.innerText = parseInt(cartQuantity.innerText) + 1;
            // Exibe mensagem de confirmação no topo da página
            const cartMessage = document.getElementById("cart-message");
            cartMessage.innerText = "Produto adicionado ao carrinho!";
            setTimeout(() => {
                cartMessage.innerText = "";
            }, 3000);
        });
    });
});

// hamburger menu

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});