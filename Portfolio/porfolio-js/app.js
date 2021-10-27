
//Global variables
let startScroll;
let scrollOnLink = false;
let resetScrollOnLink;

//Selectors
const navBar = document.querySelector("#navigation-bar");
const navBtn = document.querySelector("#pull-down-btn");
const links = document.querySelector(".links");

const home = document.querySelector(".home");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");


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
    //Nav button handler
    if (window.pageYOffset !== 0) {
        navBtn.classList.remove("hidden");
        navBtn.style.top = "0";
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

    if ((window.pageYOffset - startScroll) <= 0 && scrollOnLink === false) {
        console.log("scroll up");
        navBar.classList.remove("hidden");
        navBtn.classList.add("hidden");
    } else if ((window.pageYOffset - startScroll) > 0) {
        console.log("scroll down");
        navBar.classList.add("hidden");
        navBtn.classList.remove("hidden");
    }

    //Up scroll limiter
    if (resetScrollOnLink === true) {
        scrollOnLink = false;
    }
    startScroll = window.pageYOffset;
}

const scrollToLink = (e) => {

    const section = e.target.innerText;

    switch (section) {
        case "Home":
            home.scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
        case "Projects":
            projects.scrollIntoView({ behavior: 'smooth', block: 'center' });
            navBar.classList.add("hidden");
            navBtn.classList.remove("hidden");
            resetScrollOnLink = false;
            scrollOnLink = true;

            function resetScrollOnLinkHandler() {
                console.log("resetting scroll link");
                resetScrollOnLink = true;
            }
            setTimeout(resetScrollOnLinkHandler, 1000);

            break;
        case "Contact":
            contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
            navBar.classList.add("hidden");
            navBtn.classList.remove("hidden");
            break;
    }




}

//Event listeners

window.addEventListener("scroll", scrollHandler);

window.addEventListener("load", navBtnLoad);

navBtn.addEventListener("click", navBtnHandler);

links.addEventListener("click", scrollToLink);