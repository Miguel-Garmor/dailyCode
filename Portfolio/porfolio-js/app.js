
//Global variables
let startScroll;

//Selectors
const navBar = document.querySelector("#navigation-bar");
const navBtn = document.querySelector("#pull-down-btn");


//Functions

const navBtnLoad = () => {
    startScroll = 0;
    if (window.pageYOffset === 0) {
        navBtn.classList.add("hidden");
        navBtn.style.top = "0";
    }
}

const navBtnHandler = () => {
    navBar.classList.toggle("hidden");
    navBtn.classList.toggle("hidden");


}

const scrollHandler = () => {
    console.log(window.pageYOffset);

    //Nav button handler
    if (window.pageYOffset !== 0) {
        navBtn.classList.remove("hidden");
    } else if (window.pageYOffset === 0) {
        navBtn.classList.add("hidden");
    }

    //Nav bar handler
    if (window.pageYOffset !== 0) {
        navBar.classList.add("hidden");
        navBtn.style.top = "0";
    } else if (window.pageYOffset === 0) {
        navBar.classList.remove("hidden");

    }

    //Scroll up or down
    if ((window.pageYOffset - startScroll) <= 0) {
        console.log("scroll up");
        navBar.classList.remove("hidden");
        navBtn.classList.add("hidden");
    } else if ((window.pageYOffset - startScroll) > 0) {
        console.log("scroll down");
        navBar.classList.add("hidden");
        navBtn.classList.remove("hidden");
    }

    startScroll = window.pageYOffset;
}

//Event listeners

window.addEventListener("scroll", scrollHandler);

window.addEventListener("load", navBtnLoad);

navBtn.addEventListener("click", navBtnHandler);