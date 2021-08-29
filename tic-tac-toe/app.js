//Selectors
const table = document.querySelector("#game-area");



//Functions

const checkMark = (e) => {
    const targetEl = e.target;
    const table = e.target.parentNode.parentNode;

    if (targetEl.className === "marked") {
        if (actionCounter === 9) {
            if (actionCounter === 9) {
                console.log("Game ended");
            }
        } else if (actionCounter < 9) {
            console.log("Marked try again");
            return false;
        }
    } else {
        targetEl.classList.add("marked");
        targetEl.innerText = 'X';
        return true;
    }


};

const addMark = (e) => {

    let markChecked = false;

    markChecked = checkMark(e);

    if (markChecked === true) {
        actionCounter++;
        console.log(actionCounter);
    }


};


let actionCounter = 0;

table.addEventListener("click", addMark);



