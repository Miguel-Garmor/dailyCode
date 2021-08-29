//Selectors
const table = document.querySelector("#game-area");



//Functions

const checkWin = (e, id) => {

    /* console.log(e.target.parentNode.parentNode.children[0].children[0].id);
    console.log(e.target.parentNode.parentNode.children[0].children[1].id);
    console.log(e.target.parentNode.parentNode.children[0].children[2].id);
    console.log(e.target.parentNode.parentNode.children[1].children[0].id);
    console.log(e.target.parentNode.parentNode.children[1].children[1].id);
    console.log(e.target.parentNode.parentNode.children[1].children[2].id);
    console.log(e.target.parentNode.parentNode.children[2].children[0].id); */

    const tableRef = e.target.parentNode.parentNode;

    const column = id.slice(1, 2);
    const row = id.slice(0, 1);
    let counter = 0;
    let colCheckSuccess = false;
    let rowCheckSuccess = false;

    //Column check
    for (i = 0; i < 3; i++) {

        if (tableRef.children[i].children[column].classList.contains("marked")) {
            counter++;
        };
    };

    if (counter === 3) {
        colCheckSuccess = true;
        console.log("Success");        
    }else colCheckSucess = false;
    //-Finish column check

    counter = 0; //Reset counter

    //Row check
    for (j = 0; j < 3; j++) {

        if (tableRef.children[row].children[j].classList.contains("marked")) {
            counter++;
        };
    };

    if (counter === 3) {
        rowCheckSuccess = true;
        console.log("Success");        
    } else rowCheckSuccess = false;
    //-Finish row check

    if((colCheckSuccess || rowCheckSuccess) === true){
        return true;
    }else return false;

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
        winCheck = checkWin(e, e.target.id);
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
        console.log("Action counter:" + actionCounter);
    } else if (markChecked === 2) {
        console.log("You win!");
    }


};


let actionCounter = 0;

table.addEventListener("click", addMark);



