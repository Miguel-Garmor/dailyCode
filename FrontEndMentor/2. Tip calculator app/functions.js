
const inputCheck = (number, element, limit, inputType) => {

    if (number > limit || number === NaN) {
        element.classList.add("errorOutline");
        if (inputType === "inputBill" || inputType === "inputPeople") {
            element.parentNode.children[1].classList.add("showMessage");
            console.log(inputType);
        }
        return false;
    } else if (number <= limit || number !== NaN) {
        element.classList.remove("errorOutline");
        element.parentNode.children[1].classList.remove("showMessage");
        return true;
    }

}

const getBill = (e) => {
    let billHolder = 0;

    billHolder = parseFloat(e.target.value);
    tipElements.bill = billHolder;

    tipElements.checkBill = inputCheck(billHolder, billContainer, 9999, "inputBill");
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
    custom.value = "";
    tipElements.tip = parseInt(e.target.id);

    toggleBtnClass(e);
    tipElements.checkTip = true;

}

const selectCustomTip = (e) => {

    let customTipHolder = 0;

    customTipHolder = parseInt(custom.value);
    tipElements.tip = customTipHolder;
    e.target.id = customTipHolder;

    tipElements.checkTip = inputCheck(customTipHolder, customContainer, 100, "customTip");
}

const getNumPeople = (e) => {
    let numPeopleHolder = 0;

    numPeopleHolder = parseInt(e.target.value);
    tipElements.numPeople = numPeopleHolder;

    tipElements.checkPeople = inputCheck(numPeopleHolder, numPeopleContainer, 50, "inputPeople");
}



const checkCalc = (calculation, element) => {
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

    checkCalc(amtPerPerson, tipAmount);
}

const totalAmtPerson = () => {
    let bill = tipElements.bill;
    let tip = tipElements.tip;
    let numPeople = tipElements.numPeople;
    let amtPerPerson = (bill / numPeople + (bill * (tip / 100) / numPeople)).toFixed(2);

    console.log("Amt per person total: " + amtPerPerson);

    checkCalc(amtPerPerson, totalAmount);
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
    //Reset error outline:
    billContainer.classList.remove("errorOutline");
    customContainer.classList.remove("errorOutline");
    numPeopleContainer.classList.remove("errorOutline");

    clearClickedClass();
}

const calculate = () => {
    tipAmtPerson();
    totalAmtPerson();
    if (tipElements.checkBill === false || tipElements.checkTip === false || tipElements.checkPeople === false) {
        resetResult();
    }
}