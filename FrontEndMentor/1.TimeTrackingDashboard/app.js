const container = document.querySelector(".container");
const filterContainer = document.querySelector(".filter-container");


const setValues = () => {

    for (let i = 1; i < container.children.length; i++) {

        container.children[i].children[1].children[0].children[0].innerText = data[i - 1].title;
        console.log(container.children[i].children[1].children[1]);
    }

}

const filterValues = (e) => {
    

    for (let i = 0; i < e.target.parentNode.children.length; i++) {
        console.log("Before: " + e.target.parentNode.children[0].classList);
        e.target.parentNode.children[i].classList = "";
        console.log("After: " + e.target.parentNode.children[0].classList);
    }

    e.target.className = "clicked";
    console.log(e.target.classList);


    switch (e.target.innerText) {

        case "Daily":
            console.log("This is Daily");
            for (let i = 1; i < container.children.length; i++) {

                container.children[i].children[1].children[1].innerText = data[i - 1].timeframes.daily.current + "hrs";
                container.children[i].children[1].children[2].innerText = "Last week - " + data[i - 1].timeframes.daily.previous + "hrs";
            }

            break;
        case "Weekly":
            console.log("This is Weekly");
            for (let i = 1; i < container.children.length; i++) {

                container.children[i].children[1].children[1].innerText = data[i - 1].timeframes.weekly.current + "hrs";
                container.children[i].children[1].children[2].innerText = "Last week - " + data[i - 1].timeframes.weekly.previous + "hrs";
            }

            break;
        case "Monthly":
            console.log("This is Monthly");
            for (let i = 1; i < container.children.length; i++) {

                container.children[i].children[1].children[1].innerText = data[i - 1].timeframes.monthly.current + "hrs";
                container.children[i].children[1].children[2].innerText = "Last week - " + data[i - 1].timeframes.monthly.previous + "hrs";
            }
            break;

        default:
            break;
    }

}

window.addEventListener("load", setValues);

filterContainer.addEventListener("click", filterValues);