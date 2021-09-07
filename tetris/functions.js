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
            if (preColumn === colLeftLimit) {
                console.log("abort-left");
            } else {
                nextColumn--;
                console.log("Continue left movement");
            }
            break;

        case "down-button":
            // + Implement dynamic bottom limit
            if (preRow === rowMax) {
                /* console.log("Run bottom limit");
                nextRow--;
                tableElement.children[preRow].children[nextColumn].classList = "bottom-limit";
                tableElement.children[nextRow].children[nextColumn].innerText = "O";
                console.log(tableElement.children[nextRow].children[nextColumn].classList); */
                console.log("abort-down");
                return true;
            } else if (tableElement.children[preRow].children[preColumn].classList.contains("bottom-limit")) {
                console.log("IT RUNS");
            } else {
                nextRow++;
                console.log("Inside down: " + preRow);
                console.log("Inside down: " + limits.hardBottom); 
                console.log("Continue down movement");
                console.log(tableElement.children[nextRow].children[preColumn].id);
            }
            break;

        case "right-button":
            if (preColumn === colRightLimit) {
                console.log("abort-right");
            } else {
                nextColumn++;
                console.log("Continue right movement");
            }
            break;

        default:
            console.log("Nothing pressed");
    }

    /* console.log("1: " + nextRow);
    console.log("1: " + nextColumn);
    console.log(tableElement.children[preRow].children[preColumn].class);
    console.log(tableElement.children[preRow].children[preColumn].innerText); */

    //Delete previous "marked" position
    tableElement.children[preRow].children[preColumn].classList = "";
    tableElement.children[preRow].children[preColumn].innerText = markerLocation.markerString();

    /* console.log(tableElement.children[preRow].children[preColumn]); */

    //Add new "marked" position
    tableElement.children[nextRow].children[nextColumn].classList = "marked";
    tableElement.children[nextRow].children[nextColumn].innerText = "X";


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