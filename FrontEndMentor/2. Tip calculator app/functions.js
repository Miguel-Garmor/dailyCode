const getBill = (e) => {

    tipElements.bill = parseFloat(e.target.value);
    console.log(tipElements.bill);
}

const selectTip = (e) => {

    tipElements.tip = parseInt(e.target.id);

    console.log(tipElements.tip);

    tipAmtPerson(tipAmount);
    totalAmtPerson(totalAmount);

}

const getNumPeople = (e) => {
    tipElements.numPeople = parseInt(e.target.value);
    console.log(tipElements.numPeople);
}

const tipAmtPerson = (tipAmount) => {

    let bill = tipElements.bill;
    let tip = tipElements.tip;
    let numPeople = tipElements.numPeople;

    tipAmount.innerText = "$ " + ((bill * (tip / 100)) / numPeople).toFixed(2);


}

const totalAmtPerson = () => {
    let bill = tipElements.bill;
    let numPeople = tipElements.numPeople;

    totalAmount.innerText = "$ " + (bill * numPeople).toFixed(2);
}

const resetValues = () => {

    console.log(billEl.value);
    billEl.value = "";
    numPeopleEl.value = "";
    tipAmount.innerText = "$ 0.00";
    totalAmount.innerText = "$ 0.00";
}