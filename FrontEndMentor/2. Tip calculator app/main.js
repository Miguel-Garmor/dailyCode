const billEl = document.querySelector("#bill-input");
const buttonGridEl = document.querySelector(".button-grid");
const numPeopleEl = document.querySelector("#num-people");
const resetButton = document.querySelector("#reset-button");
const custom = document.querySelector("#custom");
const customContainer = document.querySelector(".customContainer");


const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");

const billContainer = document.querySelector("#bill-container");
const numPeopleContainer = document.querySelector("#num-people-container");

let tipElements = {
    bill: 0,
    tip: 0,
    numPeople: 0,
    check: false
};

billEl.addEventListener("input", getBill);
billEl.addEventListener("input", calculate);

buttonGridEl.addEventListener("click", selectTip);
buttonGridEl.addEventListener("click", calculate);
custom.addEventListener("input", selectCustomTip);
custom.addEventListener("input", calculate);

numPeopleEl.addEventListener("input", getNumPeople);
numPeopleEl.addEventListener("input", calculate);

resetButton.addEventListener("click", resetValues);




