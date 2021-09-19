const buttonListener = document.getElementById("clickMe");



let object = {
    positionArray: ["01", "02", "03", "04"],

    rows: [],
    columns: [],

    start: {
        rows: 0,
        columns: 0
    }
};


charToNum();

console.log("We gots object rows: " + object.rows);
console.log("Und object columns: " + object.columns);

moveDown();

numToChar();