//Selectors
const table = document.querySelector("#game-area");

const resetBtn = document.querySelector(".reset");



//Functions

const checkWin = (target, id, nameClass) => {


    const targetEl = target.parentNode.parentNode;


    const column = id.slice(1, 2);
    const row = id.slice(0, 1);
    let counter = 0;
    let colCheckSuccess = false;
    let rowCheckSuccess = false;

    //Column check
    for (i = 0; i < 3; i++) {

        if (targetEl.children[i].children[column].classList.contains(nameClass)) {
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

        if (targetEl.children[row].children[j].classList.contains(nameClass)) {
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

        //Check win
        //-- If win, return a certain value
        //-- If no win, let continue

        //Checks if there is a winner "x" Mark
        winCheck = checkWin(e.target, targetEl.id, "marked");
        if (winCheck === true) {
            return 2;
        }
        //-End checkWin

        //Add "O" mark

        let notMarked = [];
        let i = 0;
        let j = 0;
        const oMark = e.target.parentNode.parentNode;
        console.log(oMark.children.length);

        //Get non-marked table elements (array of IDs nonMarked)
        for (i = 0; i < oMark.children.length; i++) {
            for (j = 0; j < oMark.children[i].children.length; j++) {
                let item = oMark.children[i].children[j];
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

            oMark.children[row].children[column].classList.add("robot");
            console.log(oMark);
            oMark.children[row].children[column].innerText = "O";



            //Checks if there is a winner
            winCheck = checkWin(oMark.children[row].children[column], randomElementId, "robot");
            if (winCheck === false) {
                return 1;
            } else if (winCheck === true) {
                return 3;
            }
            //-End checkWin
        }
    }
};


const addMark = (e) => {

    let markChecked = 0;

    const targetEl = e.target;

    //Handles "X" mark
    if (gameEnded === false) {
        markChecked = markHandler(e, targetEl, "marked", "robot");
    }

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
        gameEnded = true;

    } else if (markChecked === 3) {
        console.log("You lose!");
        gameEnded = true;
    }

};

const resetBoard = (e) => {
    const table = e.target.parentNode.children[1].children[0];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            table.children[i].children[j].classList = "";
            table.children[i].children[j].innerText = "";
            actionCounter = 0;
            gameEnded = false;
            console.log(table.children[i].children[j]);
        }
    }
};


let actionCounter = 0;
let gameEnded = false;

table.addEventListener("click", addMark);

resetBtn.addEventListener("click", resetBoard);




