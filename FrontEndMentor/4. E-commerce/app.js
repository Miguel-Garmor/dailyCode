//Global variables
const img_urls = [
    "./imgs/image-product-1.jpg",
    "./imgs/image-product-2.jpg",
    "./imgs/image-product-3.jpg",
    "./imgs/image-product-4.jpg"
];

let imgIndex = 0;

let cartQuantitySelect = 0;
let cartQuantityTotal = 0;

let lightBoxSwitch = true;

//Selectors

const profileCart = document.querySelector(".profile-cart");
const cartIcon = document.querySelector(".fa-shopping-cart");
const cartCalc = document.querySelector("#cart-calc");
const cartGenerator = document.querySelector("#cart-generator");

const thumbnails = document.querySelector(".thumbnails");
const mainImgContainer = document.querySelector(".mainImage");
const mainImg = document.querySelector("#main-img");
const mainImgArrowContainer = document.querySelector("#mainImage-arrow-container");

const lightBox = document.querySelector("#light-box");
const closeLightBox = document.querySelector("#close-light-box");
const overlayImg = document.querySelector("#overlayImg");

const quantity = document.querySelector(".quantity");
const addToCart = document.querySelector(".addCart");

/* 
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("thumb");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

} */


//Functions

const LightBoxOnOff = () => {

    if (window.innerWidth <= 1000) {
        lightBoxSwitch = false;
        mainImgArrowContainer.className = "show";
    } else {
        lightBoxSwitch = true;
        mainImgArrowContainer.className = "hidden";
    }
}

const deleteCartHandler = (e) => {
    if (e.target.classList.contains("trash")) {
        console.log("Got the trash");
        cartQuantityTotal = 0;
        cartGenerator.innerHTML = "Cart is Empty";
    }

}
const addToCartHandler = () => {
    //Get total quantity
    cartQuantityTotal += cartQuantitySelect;

    if (cartQuantityTotal === 0) {
        cartGenerator.innerHTML = "Cart is Empty";
    } else if (cartQuantityTotal > 0) {

        cartGenerator.innerHTML = "";

        //Add to main cart
        //--1st El: image
        let imageEl = document.createElement("img");
        imageEl.src = "./imgs/image-product-1-thumbnail.jpg";
        //--

        //--2nd El: Cart calculation
        let cartCalcContainerEl = document.createElement("div");
        cartCalcContainerEl.id = "cart-calc";

        let cartDescriptionEl = document.createElement("p");
        cartDescriptionEl.innerText = "Fall Limited Edition Trainers";
        let cartCalcEl = document.createElement("p");
        cartCalcEl.innerHTML = `<p>125 x ${cartQuantityTotal}`;
        let cartTotalEl = document.createElement("p");
        cartTotalEl.innerHTML = `<p><strong>${125 * cartQuantityTotal}€</strong>`;
        //---Append p tags to "cart-calc"
        cartCalcContainerEl.appendChild(cartDescriptionEl);
        cartCalcContainerEl.appendChild(cartCalcEl);
        cartCalcContainerEl.appendChild(cartTotalEl);
        //--

        //--3rd El: trash icon
        let trasIconEl = document.createElement("i");
        trasIconEl.className = "fas fa-trash-alt trash";
        //--

        //-Add all elements to "cart-generator"
        cartGenerator.appendChild(imageEl);
        cartGenerator.appendChild(cartCalcContainerEl);
        cartGenerator.appendChild(trasIconEl);


    }
}
const increaseDecreaseQuantity = (e) => {
    if (e.target.classList.contains("minus")) {
        if (cartQuantitySelect !== 0) {
            cartQuantitySelect--;
            quantity.children[1].innerText = cartQuantitySelect;
        }

    } else if (e.target.classList.contains("plus")) {
        cartQuantitySelect++;
        quantity.children[1].innerText = cartQuantitySelect;

    }
}

const openCartHandler = () => {
    profileCart.children[1].classList.toggle("hidden");
}

const profileCartHandler = (e) => {
    console.log("Im in the cart: " + e.target.id);
}
const thumbnailHandlerIn = (e) => {
    let thumbnail = e.target;
    let thumbnailId = e.target.id;

    if (thumbnailId === "thumb1") {
        mainImg.src = "./imgs/image-product-1.jpg";
    } else if (thumbnailId === "thumb2") {
        mainImg.src = "./imgs/image-product-2.jpg";
    } else if (thumbnailId === "thumb3") {
        mainImg.src = "./imgs/image-product-3.jpg";
    } else if (thumbnailId === "thumb4") {
        mainImg.src = "./imgs/image-product-4.jpg";
    }

    /*  if (thumbnail.className === "thumb") {
         console.log(thumbnails.children[2].children[0].id);
         for (let i = 0; i < thumbnails.children.length; i++) {
             if (thumbnails.children[i].children[0].id === thumbnailId) {
                 thumbnail.style.opacity = 0.6;
                 thumbnail.style.border = "3px solid #FF7D1B";
             } else {
                 thumbnails.children[i].children[0].style.opacity = 1;
                 thumbnails.children[i].children[0].style.border = "3px solid transparent";
             }
 
         }
     } */
}

/* const thumbnailHandlerOut = () => {
    mainImg.src = "./imgs/image-product-1.jpg";
} */

const lightBoxHandler = () => {
    if (lightBoxSwitch === true) {
        lightBox.className = "show";
    }
}

const closeLightBoxHandler = () => {
    lightBox.className = "hidden";
}

const actionChangeLBImage = (direction, selector) => {
    if ((imgIndex + direction) < 0) {
        imgIndex = img_urls.length - 1;
        selector.src = img_urls[imgIndex];
    } else if ((imgIndex + direction) > img_urls.length - 1) {
        imgIndex = 0;
        selector.src = img_urls[imgIndex];
    } else {
        imgIndex += direction;
        selector.src = img_urls[imgIndex];
    }
}

const changeLBImageHandler = (e) => {

    if (e.target.parentNode.parentNode.id === "overlay-img-container") {

        if (e.target.id === "left-arrow") {
            console.log("Left arrow yahur");
            actionChangeLBImage(-1, overlayImg);

        } else if (e.target.id === "right-arrow") {
            console.log("Right arrow yahur");
            actionChangeLBImage(1, overlayImg);
        }
    } else if (e.target.parentNode.id === "mainImage-arrow-container") {
        console.log("This is mobile");
        if (e.target.id === "left-arrow") {
            console.log("Left arrow yahur");
            actionChangeLBImage(-1, mainImg);

        } else if (e.target.id === "right-arrow") {
            console.log("Right arrow yahur");
            actionChangeLBImage(1, mainImg);
        }
    }

    /*  if (e.target.id === "left-arrow") {
         console.log("Left arrow yahur");
         actionChangeLBImage(-1, selector);
 
     } else if (e.target.id === "right-arrow") {
         console.log("Right arrow yahur");
         actionChangeLBImage(1, selector);
     } */
}


//Event handlers

profileCart.addEventListener("click", profileCartHandler);
cartIcon.addEventListener("click", openCartHandler);
cartGenerator.addEventListener("click", deleteCartHandler);

thumbnails.addEventListener("click", thumbnailHandlerIn);
/* thumbnails.addEventListener("mouseover", thumbnailHandlerIn);*/
/* thumbnails.addEventListener("mouseleave", thumbnailHandlerOut); */

mainImg.addEventListener("click", lightBoxHandler);
closeLightBox.addEventListener("click", closeLightBoxHandler);
lightBox.addEventListener("click", changeLBImageHandler);

mainImgArrowContainer.addEventListener("click", changeLBImageHandler);

quantity.addEventListener("click", increaseDecreaseQuantity);
addToCart.addEventListener("click", addToCartHandler);

window.addEventListener("resize", LightBoxOnOff);
window.addEventListener("load", function () {
    if (window.innerWidth <= 1000) {
        lightBoxSwitch = false;
        mainImgArrowContainer.className = "show";
        console.log("show");
    } else {
        lightBoxSwitch = true;
        mainImgArrowContainer.className = "hidden";
        console.log("hide");
    }
});