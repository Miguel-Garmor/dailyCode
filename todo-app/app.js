//Selectors
const inputTodo = document.querySelector("#inputTodo");
const addTodoBtn = document.querySelector("#addTodoBtn");

const itemList = document.querySelector("#itemList");

//Functions
const submitTodoHandler = (e) => {
    e.preventDefault();

    //Create paragraph element
    const para = document.createElement('p');
    para.innerText = inputTodo.value;
    //Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.innerText = "Comp";
    completeBtn.classList.add("completedBtn");
    //Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Del";
    deleteBtn.classList.add("delBtn");
    //Create list element as container
    const listItem = document.createElement('li');
    //Add paragraph element to the list
    listItem.appendChild(para);
    //Add complete button element to the list
    listItem.appendChild(completeBtn);
    //Add delete button element to the list
    listItem.appendChild(deleteBtn);
    //Add the list to the containing div
    itemList.appendChild(listItem);

    //Reset text input value
    inputTodo.value = '';

};

const buttonActionHandler = (e) => {

    const liElementNodes = e.target.parentNode.childNodes;
    const nodeLength = liElementNodes.length;
    const liElement = e.target.parentElement;

    const targetElementClass = e.target.className;

    //Delete Button
    if (targetElementClass === 'delBtn') {
        //Delete nodes in li element
        for (i = 0; i < nodeLength; i++) {
            liElementNodes[0].remove();
        };

        //Delete li element
        liElement.remove();
    }
    //Completed button
    else if (targetElementClass === 'completedBtn') {
        liElement.classList.toggle("completed");
        console.log(liElement.classList);
    }

};

// Calls
addTodoBtn.addEventListener("click", submitTodoHandler);

itemList.addEventListener("click", buttonActionHandler);


