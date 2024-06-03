import { mostrarEstrellas } from "../util/mostrarEstrellas.js";
const divContainer = document.querySelector(".container");
export const detectarVoto = () => {
  divContainer.addEventListener("click", (event) => {
    const elemetHtml = event.target.parentElement;
    const typeElement = elemetHtml.localName;

    if (typeElement != "button") return;
    elemetHtml.disabled = true;
    mostrarEstrellas(elemetHtml.id);
    setTimeout(() => {
      elemetHtml.disabled = false;
    }, 1000);
  });
};
