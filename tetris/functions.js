//Functions

const createBoard = (rows, columns) => {

    //*Table section
    //--Create table
    const newTable = document.createElement("table");
    newTable.id = "table";


    //--Create table cells

    for (let i = 0; i < rows; i++) {

        let iText = String(i);

        //--Create table row
        let newRow = document.createElement("tr");

        for (let j = 0; j < columns; j++) {

            let jText = String(j);

            //--Create table cells
            let newCell = document.createElement("td");
            let id = iText.concat(jText);

            newCell.innerText = id;
            newCell.id = id;

            newRow.appendChild(newCell);

        }
        newTable.appendChild(newRow);
    }
    boardElement.appendChild(newTable);


    //-*End table section

    /*  //*Button Section
     
     //--Left button create
     const leftButton = document.createElement("button");
     leftButton.id = "left-button";
     leftButton.innerText = "Left";
     //--Down button create
     const downButton = document.createElement("button");
     downButton.id = "down-button";
     downButton.innerText = "Down";
     //--Right button create
     const rightButton = document.createElement("button");
     rightButton.id = "right-button";
     rightButton.innerText = "Right";
 
     //--Button and section appends
     boardElement.appendChild(buttonSection);
     buttonSection.appendChild(rightButton);
     buttonSection.appendChild(downButton);
     buttonSection.appendChild(leftButton);
 
     //-*End Button section */

}


const generateObject = (chosenObject, tableEl) => {
    console.log(chosenObject);

    let startRow = markerLocation.start.row;
    let startColumn = markerLocation.start.column;

    switch (chosenObject) {

        case "square":
            console.log("This is the square");
            console.log("Start Column: " + startColumn);

            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    tableEl.children[startRow + i].children[startColumn + j].innerText = "X";
                    tableEl.children[startRow + i].children[startColumn + j].classList.add("marked");

                    currentObject.points = [...currentObject.points, tableEl.children[startRow + i].children[startColumn + j].id];

                    console.log("Current points: " + currentObject.points);
                }
            }
            console.log("Finished square: " + currentObject.points)
            break;

        default:
            console.log("No object");

    }

}

const resetMarker = () => {

    const rowStart = markerLocation.start.row;

    const tableEl = boardElement.children[0];
    const targetEl = tableEl.children[rowStart];

    const columnStart = markerLocation.start.column;

    markerLocation.current.row = 0;
    markerLocation.current.column = columnStart;

    //Sets marker to mid of board

    targetEl.children[columnStart].innerText = "X";
    targetEl.children[columnStart].classList.add("marked");

    console.log("Running resetMarker()");

    generateObject("square", tableEl);


}


const getMarkerLocation = (target) => {

    const rows = target.children.length;
    const columns = target.children[0].children.length;

    //Search for ID: "marked"

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (target.children[i].children[j].className === "marked") {

                markerLocation.current.row = i;
                markerLocation.current.column = j;


            }
        }
    }
}

const lowerRows = (row, colMax, tableElement) => {
    console.log("Run lower rows");
    row--;
    for (let i = row; i >= 0; i--) {
        for (let j = 0; j <= colMax; j++) {
            console.log("row" + i);
            console.log("column" + j);

            if (tableElement.children[i].children[j].className === "bottom-limit") {
                tableElement.children[i].children[j].className = "";
                tableElement.children[i].children[j].innerText = "";
                tableElement.children[i + 1].children[j].className = "bottom-limit";
                tableElement.children[i + 1].children[j].innerText = "O";
                console.log("FOUND IT");
            }


        }
    }

}

const isRowCompleted = (tableElement) => {

    const colMax = limits.right;
    const row = markerLocation.current.row;

    let counter = 0;

    for (let j = 0; j <= colMax; j++) {
        console.log(colMax);
        console.log(counter);

        if (tableElement.children[row].children[j].className === "bottom-limit") {
            console.log("Check: " + (j + 1));
            counter++;
            if ((counter - 1) === colMax) {
                console.log("ROW COMPLETED");
                for (j = 0; j <= colMax; j++) {
                    tableElement.children[row].children[j].className = "";
                    tableElement.children[row].children[j].innerText = "";
                }
                lowerRows(row, colMax, tableElement);

            }
        }
    }

}

const checkLimits = (rowCheck, columnCheck, tableElement) => {

    const maxRow = boardValues.rows - 1;
    const maxColumns = boardValues.columns - 1;


    for (let i = maxRow; i >= 0; i--) {
        for (let j = 0; j < maxColumns; j++) {
            console.log("Marker ID: " + i + "" + j);
            if (tableElement.children[i].children[j].className === "marked") {
                console.log("Hit a MARKER: " + i + "" + j);
            }
        }
    }
}

const addBottomLimit = (preRow, preColumn, nextColumn, tableElement) => {

    tableElement.children[preRow].children[preColumn].className = "bottom-limit";
    tableElement.children[preRow].children[nextColumn].innerText = "O";

}

const adjustMarker = (direction, tableElement) => {

    //Limits
    const rowMax = limits.hardBottom;
    let colLeftLimit = limits.left;
    let colRightLimit = limits.right;
    //--Limits

    //Marker location
    let preRow = markerLocation.current.row;
    let preColumn = markerLocation.current.column;
    let nextRow = preRow;
    let nextColumn = preColumn;
    //--Marker location

    switch (direction) {

        case "left-button":
            if (preColumn === colLeftLimit || tableElement.children[preRow].children[preColumn - 1].className === "bottom-limit") {
                console.log("abort-left");
            } else {
                nextColumn--;
                checkLimits(0, -1, tableElement);
                console.log("Continue left movement");
            }
            break;

        case "down-button":
            // + Implement dynamic bottom limit
            if (preRow === rowMax) {
                //TEST console.log("Run bottom limit");
                addBottomLimit(preRow, preColumn, nextColumn, tableElement);
                console.log("abort-down 1");
                isRowCompleted(tableElement);
                return true;

            } else if ((preRow === 0) && (tableElement.children[preRow + 1].children[preColumn].className === "bottom-limit")) {
                addBottomLimit(preRow, preColumn, nextColumn, tableElement);
                console.log("TOP LIMIT, END GAME");
                //return?

            } else if (tableElement.children[preRow + 1].children[preColumn].className === "bottom-limit") {
                //TEST console.log("IT RUNS");
                addBottomLimit(preRow, preColumn, nextColumn, tableElement);
                console.log("abort-down 2");
                isRowCompleted(tableElement);
                return true;

            } else {
                nextRow++;
                checkLimits(0, -1, tableElement);
                console.log("Continue down movement");
                //TEST console.log(tableElement.children[nextRow].children[preColumn].id);
            }
            break;

        case "right-button":
            if (preColumn === colRightLimit || tableElement.children[preRow].children[preColumn + 1].className === "bottom-limit") {
                console.log("abort-right");
            } else {
                nextColumn++;
                checkLimits(0, -1, tableElement);
                console.log("Continue right movement");
            }
            break;

        default:
            console.log("Nothing pressed");
            return false;
    }

    /* console.log("1: " + nextRow);
    console.log("1: " + nextColumn);
    console.log(tableElement.children[preRow].children[preColumn].class);
    console.log(tableElement.children[preRow].children[preColumn].innerText); */
    if (tableElement.children[preRow].children[preColumn].className !== "bottom-limit") {
        //Delete previous "marked" position
        console.log(tableElement.children[preRow].children[preColumn].className);
        tableElement.children[preRow].children[preColumn].classList = "";
        tableElement.children[preRow].children[preColumn].innerText = markerLocation.markerString();

        /* console.log(tableElement.children[preRow].children[preColumn]); */

        //Add new "marked" position


        tableElement.children[nextRow].children[nextColumn].classList = "marked";
        tableElement.children[nextRow].children[nextColumn].innerText = "X";

        markerLocation.current.row = nextRow;
        markerLocation.current.column = nextColumn;
    }


    console.log("Marker ID LOC:" + markerLocation.markerString());


    /* console.log(tableElement.children[nextRow].children[nextColumn]); */

    /* markerLocation = nextRow.concat(nextColumn);*/


    return false;

}

//Inside:
//--getMarkerLocation
//--adjustMarker
const movement = (e) => {

    const tableElement = e.target.parentNode.parentNode.children[0].children[0];

    console.log("Inside Movement - Marker location: " + markerLocation.markerString());

    if (touchBottomLimit === false) {

        touchBottomLimit = adjustMarker(e.target.id, tableElement);
        getMarkerLocation(tableElement);

    } else if (touchBottomLimit === true) {

        resetMarker();
        console.log("Touch bottom true (new Marker loc): " + markerLocation.markerString());
        touchBottomLimit = false;
    }

}