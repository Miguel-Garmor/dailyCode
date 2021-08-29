//Selectors
const table = document.querySelector("#game-area");



//Functions

const checkWin = (id) => {

    const column = id.slice(1, 2);
    const row = id.slice(0, 1);
    let counter = 0;

    //Column check
    for (i = 0; i < 3; i++) {

        let iToString = i.toString();
        let colToString = column.toString();
        let endNum = iToString + colToString;
        console.log("id"+id);
    };

    if (counter === 3) {
        return true;
    }
    //-Finish column check

    counter = 0; //Reset counter

    //Row check
    for (j = 0; j < 3; j++) {
        let rowToString = row.toString();
        let jToString = j.toString();
        let endNum = rowToString + jToString;
        console.log("id" + id);
    };

    if (counter === 3) {
        return true;
    } else false;
    //-Finish row check

};

const markHandler = (e) => {
    const targetEl = e.target;
    const table = e.target.parentNode.parentNode;
    let winCheck = false;

    if (targetEl.className === "marked") {
        if (actionCounter === 9) {
            if (actionCounter === 9) {
                console.log("Game ended");
            }
        } else if (actionCounter < 9) {
            console.log("Marked try again");
            return 0;
        }
    } else {
        targetEl.classList.add("marked");
        targetEl.innerText = 'X';

        //Checks if there is a winner
        winCheck = checkWin(e.target.id);
        if (winCheck === false) {
            return 1;
        } else return 2;
        //-End checkWin

    }


};

const addMark = (e) => {

    let markChecked = 0;

    //Handles X mark
    markChecked = markHandler(e);
    //-End markHandler
    //---checkWin inside

    if (markChecked === 1) {
        actionCounter++;
        console.log(actionCounter);
    } else if (markChecked === 2) {
        console.log("You win!");
    }


};


let actionCounter = 0;

table.addEventListener("click", addMark);



