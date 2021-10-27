
//Global variables
let startScroll;
let scrollOnLink = false;
let resetScrollOnLink;

//Selectors
const navBar = document.querySelector("#navigation-bar");
const navBtn = document.querySelector("#pull-down-btn");
const links = document.querySelector(".links");
const mobileLinks = document.querySelector(".mobileLinks");

const logo = document.querySelector("#logo");

const home = document.querySelector(".home");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const hamburger = document.querySelector("#hamburger");
const menuCross = document.querySelector("#menu-cross");

const emailSubmit = document.querySelector("#emailSubmit");


//Functions

const navBtnLoad = () => {
    if (window.innerWidth > 890) {
        startScroll = 0;
        if (window.pageYOffset === 0) {
            navBtn.classList.add("hidden");
            navBtn.style.top = "0";
        }
    }
}

const navBtnHandler = () => {
    navBar.classList.toggle("hidden");
    navBtn.classList.toggle("hidden");
}

const scrollHandler = () => {

    if (window.innerWidth > 890) {
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
    } else if (window.innerWidth <= 890) {
        if (window.pageYOffset === 0) {
            navBar.classList.remove("hidden");
        } else if (window.pageYOffset !== 0) {
            navBar.classList.add("hidden");
        }
    }
}

const scrollToLink = (e) => {

    const section = e.target.innerText;

    switch (section) {
        case "Home":
            if (window.innerWidth > 890) {
                home.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (window.innerWidth <= 890) {
                home.scrollIntoView({ behavior: 'smooth' });

                hamburger.classList.remove("hidden");
                mobileLinks.classList.add("hidden");
                menuCross.classList.add("hidden");
                navBar.classList.remove("hidden");

            }
            break;
        case "Projects":
            if (window.innerWidth > 890) {
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

            } else if (window.innerWidth <= 890) {
                projects.scrollIntoView({ behavior: 'smooth' });

                hamburger.classList.remove("hidden");
                mobileLinks.classList.add("hidden");
                menuCross.classList.add("hidden");
                navBar.classList.add("hidden");


            }
            break;
        case "Contact":
            if (window.innerWidth > 890) {
                contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
                navBar.classList.add("hidden");
                navBtn.classList.remove("hidden");
            } else if (window.innerWidth <= 890) {
                contact.scrollIntoView({ behavior: 'smooth' });

                hamburger.classList.remove("hidden");
                mobileLinks.classList.add("hidden");
                menuCross.classList.add("hidden");
                navBar.classList.add("hidden");


            }

            break;
    }
}

const sendMail = (e) => {
    e.preventDefault();
    const tempParams = {
        from_name: document.querySelector("#toName").value,
        sender_email: document.querySelector("#senderEmail").value,
        message: document.querySelector("#message").value
    }
    /* emailjs.send('service_x0myxqr', 'template_s06skol', tempParams)
        .then(res => {
            console.log("success", res.status);
        }) */

}
const toggleMenu = (e) => {
    if (e.target.id === "menu-cross") {
        hamburger.classList.remove("hidden");
        mobileLinks.classList.add("hidden");
        menuCross.classList.add("hidden");
    } else if (e.target.id === "hamburger") {
        hamburger.classList.add("hidden");

        mobileLinks.classList.remove("hidden");
        menuCross.classList.remove("hidden");
    }

    console.log("toggle menu activated");

}

//Event listeners

window.addEventListener("scroll", scrollHandler);

window.addEventListener("load", navBtnLoad);

navBtn.addEventListener("click", navBtnHandler);

links.addEventListener("click", scrollToLink);
mobileLinks.addEventListener("click", scrollToLink);

emailSubmit.addEventListener("click", sendMail);

hamburger.addEventListener("click", toggleMenu);

menuCross.addEventListener("click", toggleMenu);