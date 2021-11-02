
//Global variables
let startScroll;
let scrollOnLink = false;
let resetScrollOnLink;

const formCheck = {
    sender_name: false,
    sender_email: false,
    sender_email2: false,
    sender_message: false
};

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

const toName = document.querySelector("#toName");
const senderEmail = document.querySelector("#senderEmail");
const senderEmail2 = document.querySelector("#senderEmail2");
const message = document.querySelector("#message");
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

const nameCheckHandler = () => {

    if (toName.value === "") {
        toName.classList.remove("success");
        toName.classList.add("error");
        document.querySelector("#empty-name").classList.remove("hidden");
        formCheck.sender_name = false;
    } else {
        toName.classList.add("success");
        toName.classList.remove("error");
        document.querySelector("#empty-name").classList.add("hidden");
        formCheck.sender_name = true;
    }
}

const emailCheckHandler = () => {
    if (senderEmail.value.includes("@")) {
        document.querySelector("#invalid-email").classList.add("hidden");
        senderEmail.classList.remove("error");
        senderEmail.classList.add("success");
        formCheck.sender_email = true;
    } else {
        document.querySelector("#invalid-email").classList.remove("hidden");
        senderEmail.classList.add("error");
        senderEmail.classList.remove("success");
        formCheck.sender_email = false;
    }

    if (senderEmail.value === senderEmail2.value && senderEmail2.value !== "") {
        document.querySelector("#no-match").classList.add("hidden");
        senderEmail2.classList.remove("error");
        senderEmail2.classList.add("success");
        formCheck.sender_email2 = true;
    } else if (senderEmail.value !== senderEmail2.value || senderEmail2.value === "") {
        if (senderEmail2.value === "") {
            document.querySelector("#no-match").innerText = "Field is empty";
            document.querySelector("#no-match").classList.remove("hidden");
            senderEmail2.classList.add("error");
            senderEmail2.classList.remove("success");
            formCheck.sender_email2 = false;
        } else {
            document.querySelector("#no-match").innerText = "Emails don't match";
            document.querySelector("#no-match").classList.remove("hidden");
            senderEmail2.classList.add("error");
            senderEmail2.classList.remove("success");
            formCheck.sender_email2 = false;
        }
    }

}

const messageCheckHandler = () => {
    if (message.value === "") {
        document.querySelector("#empty-message").classList.remove("hidden");
        message.classList.add("error");
        message.classList.remove("success");
        formCheck.sender_message = false;
    } else {
        document.querySelector("#empty-message").classList.add("hidden");
        message.classList.remove("error");
        message.classList.add("success");
        formCheck.sender_message = true;
    }
}

const sendMail = (e) => {
    e.preventDefault();
    const tempParams = {
        from_name: toName.value,
        sender_email: senderEmail.value,
        message: message.value
    }

    //

    if (formCheck.sender_name && formCheck.sender_email && formCheck.sender_email2 && formCheck.sender_message) {
        console.log("Success: message sent");
        emailjs.send('service_x0myxqr', 'template_s06skol', tempParams)
            .then(res => {
                console.log("success", res.status);
            })
        document.querySelector("#message-sent").classList.remove("hidden");

        toName.value = "";
        senderEmail.value = "";
        senderEmail2.value = "";
        message.value = "";

        formCheck.sender_name = false;
        formCheck.sender_email = false;
        formCheck.sender_email2 = false;
        formCheck.sender_message = false;
    } else {
        console.log("Error: message not sent");
        nameCheckHandler();
        emailCheckHandler();
        messageCheckHandler();
        document.querySelector("#message-sent").classList.add("hidden");
    }


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

const projectGithubLinkHandler = (e) => {
    const targetClass = e.target.classList;
    const parentEl = e.target.closest(".project");

    console.log(parentEl.id);

    if (!targetClass.contains("fa-github") && parentEl.classList.contains("project")) {
        window.open(parentEl.getAttribute("data-value"));

    } else if (targetClass.contains("fa-github")) {
        window.open(e.target.getAttribute("data-value"));
    }

}

//Event listeners

window.addEventListener("scroll", scrollHandler);

window.addEventListener("load", navBtnLoad);

navBtn.addEventListener("click", navBtnHandler);

links.addEventListener("click", scrollToLink);
mobileLinks.addEventListener("click", scrollToLink);


toName.addEventListener("input", nameCheckHandler);
senderEmail.addEventListener("input", emailCheckHandler);
senderEmail2.addEventListener("input", emailCheckHandler);
message.addEventListener("input", messageCheckHandler);
emailSubmit.addEventListener("click", sendMail);

hamburger.addEventListener("click", toggleMenu);

menuCross.addEventListener("click", toggleMenu);

projects.addEventListener("click", projectGithubLinkHandler);
