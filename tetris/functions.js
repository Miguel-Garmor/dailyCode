//Functions
const createBoard = () => {

    //*Table section
    //--Create table
    const newTable = document.createElement("table");
    boardElement.appendChild(newTable);

    //--Create table cells
    for (let i = 0; i < 10; i++) {
        let iText = String(i);
        //--Create table row
        const newRow = document.createElement("tr");
        newTable.appendChild(newRow);
        for (let j = 0; j < 7; j++) {
            let jText = String(j);
            //--Create table cells
            const newCell = document.createElement("td");
            let id = iText.concat(jText);
            newCell.innerText = id;
            newCell.id = id;
            console.log(newCell.id);
            newRow.appendChild(newCell);
        }
    }
    //-*End table section

    //*Button Section
    //--Section create
    const buttonSection = document.createElement("section");
    buttonSection.id = "button-section";
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

    //-*End Button section

}