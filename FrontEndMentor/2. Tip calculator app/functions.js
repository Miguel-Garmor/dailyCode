
const inputCheck = (number, element, limit, inputType) => {

    if (number > limit || number === NaN) {
        element.classList.add("errorOutline");
        return false;
    } else if (number <= limit) {
        element.classList.remove("errorOutline");
        return true;
    }

}

const getBill = (e) => {
    let billHolder = 0;

    billHolder = parseFloat(e.target.value);
    tipElements.bill = billHolder;

    tipElements.check = inputCheck(billHolder, billContainer, 9999, "inputBill");
}

const clearClickedClass = () => {
    let buttons = buttonGridEl.children;
    let buttonsLength = buttons.length - 1;

    for (let i = 0; i < buttonsLength; i++) {
        buttons[i].classList.remove("clickedTip")
    }
}

const toggleBtnClass = (e) => {

    clearClickedClass();

    if (e.target.classList.contains("clickBtn")) {
        e.target.classList.add("clickedTip");
    }

}

const selectTip = (e) => {
    tipElements.tip = parseInt(e.target.id);

    toggleBtnClass(e);

}

const selectCustomTip = (e) => {

    let customTipHolder = 0;

    customTipHolder = parseInt(custom.value);
    tipElements.tip = customTipHolder;
    e.target.id = customTipHolder;

    tipElements.check = inputCheck(customTipHolder, customContainer, 100, "customTip");
}

const getNumPeople = (e) => {
    let numPeopleHolder = 0;

    numPeopleHolder = parseInt(e.target.value);
    tipElements.numPeople = numPeopleHolder;

    tipElements.check = inputCheck(numPeopleHolder, numPeopleContainer, 50, "inputPeople");
}

const calculate = () => {
    tipAmtPerson();
    totalAmtPerson();
    if (tipElements.check === false) {
        resetResult();
    }
}

const checkValues = (calculation, element) => {
    console.log(calculation);
    if (calculation !== "NaN" && calculation !== "Infinity") {
        element.innerText = "$ " + calculation;
    } else resetResult();
}

const tipAmtPerson = () => {

    let bill = tipElements.bill;
    let tip = tipElements.tip;
    let numPeople = tipElements.numPeople;
    let amtPerPerson = ((bill * (tip / 100)) / numPeople).toFixed(2)

    console.log("Amt per person tip: " + amtPerPerson);

    checkValues(amtPerPerson, tipAmount);
}

const totalAmtPerson = () => {
    let bill = tipElements.bill;
    let tip = tipElements.tip;
    let numPeople = tipElements.numPeople;
    let amtPerPerson = (bill / numPeople + (bill * (tip / 100) / numPeople)).toFixed(2);

    console.log("Amt per person total: " + amtPerPerson);

    checkValues(amtPerPerson, totalAmount);
}

const resetResult = () => {
    tipAmount.innerText = "$ 0.00";
    totalAmount.innerText = "$ 0.00";
}

const resetValues = () => {

    //Reset html values
    billEl.value = "";
    numPeopleEl.value = "";
    tipAmount.innerText = "$ 0.00";
    totalAmount.innerText = "$ 0.00";
    custom.value = "";
    //Reset JS variables
    tipElements.bill = 0;
    tipElements.tip = 0;
    tipElements.numPeople = 0;

    clearClickedClass();
}