const numToChar = () => {

    let string1 = "";
    let string2 = "";

    for (let i = 0; i < object.rows.length; i++) {

        string1 = object.rows[i].toString();
        string2 = object.columns[i].toString();
        object.positionArray[i] = string1.concat(string2);
    }

    console.log(object.positionArray);

}
const moveDown = () => {

    for (let i = 0; i < object.rows.length; i++) {
        object.rows[i] += 1;
        console.log(object.rows);
    }

}
const charToNum = () => {

    console.log("GO LETS");

    let stringOne = "";
    let stringTwo = "";

    let numOne = 0;
    let numTwo = 0;



    let ascii = 0;

    for (let i = 0; i < object.positionArray.length; i++) {

        string = object.positionArray[i];

        stringOne = string.slice(0, 1);
        stringTwo = string.slice(1, 2);


        //1st String
        ascii = stringOne.charCodeAt(0);
        console.log("Ascii: " + ascii);
        if (ascii === 48) {
            numOne = 0;
        } else {
            numOne = parseInt(stringOne);
        }

        console.log("NumOne: " + numOne);

        object.rows[i] = numOne;

        console.log("Object rows: " + object.rows);

        //2nd String
        ascii = stringTwo.charCodeAt(0);
        console.log("Ascii: " + ascii);
        if (ascii === 48) {
            numTwo = 0;
        } else {
            numTwo = parseInt(stringTwo);
        }

        console.log("NumTwo: " + numTwo);

        object.columns[i] = numTwo;

        console.log("Object columns: " + object.columns);

    }
    return object;
}