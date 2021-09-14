const container = document.querySelector(".container");



const setValues = () => {

    for (let i = 1; i < container.children.length; i++) {

        container.children[i].children[1].children[0].children[0].innerText = data[i-1].title;
        console.log(container.children[i].children[1].children[0].children[0]);
    }

}

window.addEventListener("load", setValues);