const botaoSecao1 = document.getElementById("mostrarSecao1");
const botaoSecao2 = document.getElementById("mostrarSecao2");
const botaoCarrinho = document.getElementById("mostrarCarrinho");
const secao1 = document.getElementById("secao1");
const secao2 = document.getElementById("secao2");
const carrinho = document.getElementById("carrinho");

botaoSecao1.addEventListener("click", function () {
    secao1.style.display = "block";
    secao2.style.display = "none";
    carrinho.style.display = "none";
});

botaoSecao2.addEventListener("click", function () {
    secao1.style.display = "none";
    secao2.style.display = "block";
    carrinho.style.display = "none";
});

botaoCarrinho.addEventListener("click", function () {
    secao1.style.display = "none";
    secao2.style.display = "none";
    carrinho.style.display = "block";
});
