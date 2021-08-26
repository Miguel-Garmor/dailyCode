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


addTodoBtn.addEventListener("click", submitTodoHandler);


