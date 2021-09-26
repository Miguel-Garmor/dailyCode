const billEl = document.querySelector("#bill-input");
const buttonGridEl = document.querySelector(".button-grid");
const numPeopleEl = document.querySelector("#num-people");
const resetButton = document.querySelector("#reset-button");

const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");


let tipElements = {
    bill: 0,
    tip: 0,
    numPeople: 0
};

billEl.addEventListener("input", getBill);
buttonGridEl.addEventListener("click", selectTip);
numPeopleEl.addEventListener("input", getNumPeople);
resetButton.addEventListener("click", resetValues);

