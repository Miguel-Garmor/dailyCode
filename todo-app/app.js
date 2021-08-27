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

const deleteButtonHandler = (e) => {

    const listNodes = e.target.parentNode.childNodes;
    const nodeLength = listNodes.length;
    const liElement = e.target.parentElement;

    const targetElementClass = e.target.className;

    //Deletes all nodes inside the li tag
    if (targetElementClass === 'delBtn') {
        for (i = 0; i < nodeLength; i++) {
            listNodes[0].remove();
        };

        liElement.remove();
    }
};

// Calls
addTodoBtn.addEventListener("click", submitTodoHandler);

itemList.addEventListener("click", deleteButtonHandler);


