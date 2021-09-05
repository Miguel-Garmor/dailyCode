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

const setMarker = () => {

    const rowStart = 0;
    let markerLocation;

    const tableEl = boardElement.children[0];


    const targetEl = tableEl.children[rowStart]

    const numColumns = targetEl.children.length;

    const columnStart = parseInt(numColumns / 2);

    //Sets marker to mid of board

    targetEl.children[columnStart].innerText = "X";
    targetEl.children[columnStart].classList.add("marked");

    //Return initial marker position:

    return markerLocation;
}

const getMarkerLocation = (target) => {
    console.log();

    const rows = target.children.length;
    const columns = target.children[0].children.length;

    let markerLocation;

    //Search for ID: "marked"

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (target.children[i].children[j].className === "marked") {
                let rowPos = i.toString();
                let colPos = j.toString();

                markerLocation = rowPos.concat(colPos);
                return markerLocation;
            }
        }
    }
}

const adjustMarker = (direction, tableElement, markerLocation, colMax, bottomLimit) => {


    let colLeftLimit = "0";
    let colRightLimit = (colMax - 1).toString();
    console.log(colRightLimit);
    //bottom Limit -> will be a changing array
    //let bottomLimit; //array 

    let preRow = markerLocation.slice(0, 1);
    let preColumn = markerLocation.slice(1, 2);
    let nextRow = preRow;
    let nextColumn = preColumn;

    console.log("0: " + preRow);
    console.log("0: " + preColumn);



    switch (direction) {

        case "left-button":
            if (preColumn === colLeftLimit) {
                console.log("abort-left");
            } else {
                nextColumn--;
            }
            break;

        case "down-button":
            // + Implement dynamic bottom limit
            if (markerLocation === bottomLimit[preColumn]) {
                console.log("abort-down");
            } else {
                nextRow++;
            }
            break;

        case "right-button":
            if (preColumn === colRightLimit) {
                console.log("abort-right");
            } else {
                nextColumn++;
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
    tableElement.children[preRow].children[preColumn].innerText = markerLocation;
    
    /* console.log(tableElement.children[preRow].children[preColumn]); */

    //Add new "marked" position
    tableElement.children[nextRow].children[nextColumn].classList = "marked";
    tableElement.children[nextRow].children[nextColumn].innerText = "X";
    
    /* console.log(tableElement.children[nextRow].children[nextColumn]); */

    //markerLocation = row.concat(column);


}

//Inside:
//--getMarkerLocation
//--adjustMarker
const movement = (e) => {

    const tableElement = e.target.parentNode.parentNode.children[0].children[0];

    const colMax = e.target.parentNode.parentNode.children[0].children[0].children[0].children.length;
    let bottomLimit = ["90", "91", "92", "93", "94", "95", "96"]

    markerLocation;

    markerLocation = getMarkerLocation(tableElement);
    console.log("Marker location: " + markerLocation);

    adjustMarker(e.target.id, tableElement, markerLocation, colMax, bottomLimit);


}
