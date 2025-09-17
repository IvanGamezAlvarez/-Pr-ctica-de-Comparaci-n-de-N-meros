const numb1 = document.querySelector("#numb1");
const numb2 = document.querySelector("#numb2");
const numb3 = document.querySelector("#numb3");
const resultsDiv = document.querySelector("#results");
const sendButton = document.querySelector("#send");
const infoMessage = document.querySelector("#info-message");

const sortNumbersLowToHigh = (numbers) => {
  const newNumbers = [...numbers];
  return newNumbers.sort((a, b) => {
    return a - b;
  });
};
const sortNumbersHighToLow = (numbers) => {
  const newNumbers = [...numbers];
  return newNumbers.sort((a, b) => {
    if (a == b) {
      console.log("se repitio el numero " + a);
    }
    return b - a;
  });
};
const makeResult = (highContent, lowContent, infoContent) => {
  const newCard = document.createElement("div");
  const parrafHig = document.createElement("p");
  const parrafLow = document.createElement("p");
  const parrafInfo = document.createElement("h3");
  parrafHig.textContent = "Orden de mayor a menor: " + highContent;
  parrafLow.textContent = "Orden de menor a mayor: " + lowContent;
  parrafInfo.textContent = "Los numeros ingresados fueron: " + infoContent;
  newCard.appendChild(parrafInfo);
  newCard.appendChild(parrafHig);
  newCard.appendChild(parrafLow);
  resultsDiv.appendChild(newCard);
};

const toggleSend = () => {
  let numbersForUse = [];
  if (numb1.value && numb2.value && numb3.value) {
    numbersForUse.push(numb1.value);
    numbersForUse.push(numb2.value);
    numbersForUse.push(numb3.value);
    const highSort = sortNumbersHighToLow(numbersForUse);
    const lowSort = sortNumbersLowToHigh(numbersForUse);
    makeResult(highSort, lowSort, numbersForUse);
    infoMessage.textContent = "Llena los 3 espacios y presiona enviar";
  } else {
    infoMessage.textContent = "Completa todos los espacios";
  }
};

sendButton.addEventListener("click", () => {
  toggleSend();
});
