//Selectors
const table = document.querySelector("#game-area");



//Functions

const checkWin = (e, id) => {


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
    } else colCheckSucess = false;
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

    if ((colCheckSuccess || rowCheckSuccess) === true) {
        return true;
    } else return false;

};

const gameEndOrMarkedCheck = (actionCounter) => {
    //Game end or marked check
    if (actionCounter === 9) {
            console.log("Game ended");
    } else if (actionCounter < 9) {
        console.log("Marked try again");
        return 0;
    }
};

const markHandler = (e, targetEl, className1, className2) => {

    let winCheck = false;
    let returnHandler = false;

    if (targetEl.classList.contains(className1) || targetEl.classList.contains(className2)) {
        returnHandler = gameEndOrMarkedCheck(actionCounter);
        if (returnHandler === 0) {
            return 0;
        }
    } else {
        //Add X mark
        targetEl.classList.add(className1);
        targetEl.innerText = 'X';

        //Add "O" mark

        let notMarked = [];
        let i = 0;
        let j = 0;
        const tableRef = e.target.parentNode.parentNode;
        console.log(tableRef.children.length);

        //Get non-marked table elements (array of IDs nonMarked)
        for (i = 0; i < tableRef.children.length; i++) {
            for (j = 0; j < tableRef.children[i].children.length; j++) {
                let item = tableRef.children[i].children[j];
                if (item.classList.contains(className1) || item.classList.contains(className2)) {
                    console.log(item.id + " " + "is marked");
                } else if (!item.classList.contains(className1) || !item.classList.contains(className2)) {
                    notMarked = [...notMarked, item.id];
                    console.log(item.id);
                }
            }
        }

        //Get random nonMarked array position
        if (notMarked.length > 0) {
            let randomizer = Math.floor(Math.random() * notMarked.length);
            let randomElementId = notMarked[randomizer];


            const row = randomElementId.slice(0, 1);
            const column = randomElementId.slice(1, 2);

            tableRef.children[row].children[column].classList.add("robot");
            console.log(tableRef);
            tableRef.children[row].children[column].innerText = "O";
        }


        //Checks if there is a winner
        winCheck = checkWin(e, targetEl.id);
        if (winCheck === false) {
            return 1;
        } else return 2;
        //-End checkWin
    }
};


const addMark = (e) => {

    let markChecked = 0;
    const targetEl = e.target;

    //Handles "X" mark
    markChecked = markHandler(e, targetEl, "marked", "robot");
    //-End markHandler
    //---checkWin inside

    //Handles "O" mark
    // markChecked = markHandler(random, "robot", "marked");
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



