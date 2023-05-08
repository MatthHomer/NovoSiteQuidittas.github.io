// Seleciona o elemento carrossel
const carrossel = document.querySelector(".carrossel");

// Clone as imagens e adicione-as no final do carrossel
const imagens = carrossel.querySelectorAll("img");
for (let i = 0; i < imagens.length; i++) {
  const clone = imagens[i].cloneNode(true);
  carrossel.appendChild(clone);
}

const clicaElements = document.querySelectorAll(".header-middle h5");

for (let i = 0; i < clicaElements.length; i++) {
  clicaElements[i].addEventListener("click", () => {
    clicaElements[i].classList.add("clicado");
  });
};
