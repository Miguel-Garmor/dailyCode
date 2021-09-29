
const inputCheck = (number, element, limit, inputType) => {

    if (number > limit || number === NaN) {
        element.classList.add("errorOutline");
    } else if (number < limit) {
        element.classList.remove("errorOutline");
    }

}

const checkValues = () => {

}

const getBill = (e) => {
    let billHolder = 0;

    billHolder = parseFloat(e.target.value);
    tipElements.bill = billHolder;

    inputCheck(billHolder, billContainer, 9999, "inputBill");
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

    tipAmtPerson(tipAmount);
    totalAmtPerson(totalAmount);

}

const selectCustomTip = () => {

    let customTipHolder = 0;

    customTipHolder = parseInt(custom.value);
    tipElements.tip = customTipHolder;

    inputCheck(customTipHolder, customContainer, 100, "customTip");
}

const getNumPeople = (e) => {
    let numPeopleHolder = 0;

    numPeopleHolder = parseInt(e.target.value);
    tipElements.numPeople = numPeopleHolder;

    inputCheck(numPeopleHolder, numPeopleContainer, 50, "inputPeople");
}

const tipAmtPerson = (tipAmount) => {

    let bill = tipElements.bill;
    let tip = tipElements.tip;
    let numPeople = tipElements.numPeople;

    tipAmount.innerText = "$ " + ((bill * (tip / 100)) / numPeople).toFixed(2);


}

const totalAmtPerson = () => {
    let bill = tipElements.bill;
    let tip = tipElements.tip;
    let numPeople = tipElements.numPeople;

    totalAmount.innerText = "$ " + (bill / numPeople + (bill * (tip / 100) / numPeople)).toFixed(2);
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