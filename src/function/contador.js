const textBoy = document.querySelector("#contador-text-boy");
const textGirl = document.querySelector("#contador-text-girl");

export const contador = (voto) => {
  if (voto === "boy") {
    const valor = Number(textBoy.innerText);

    textBoy.innerText = valor + 1;
  } else {
    const valor = Number(textGirl.innerText);

    textGirl.innerText = valor + 1;
  }
};
