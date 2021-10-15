//Global variables
const img_urls = [
    "./imgs/image-product-1.jpg",
    "./imgs/image-product-2.jpg",
    "./imgs/image-product-3.jpg",
    "./imgs/image-product-4.jpg"
];

let imgIndex = 0;

//Selectors

const profileCart = document.querySelector(".profile-cart");
const cartIcon = document.querySelector(".fa-shopping-cart");

const thumbnails = document.querySelector(".thumbnails");
const mainImgContainer = document.querySelector(".mainImage");
const mainImg = document.querySelector("#main-img");

const lightBox = document.querySelector("#light-box");
const closeLightBox = document.querySelector("#close-light-box");
const overlayImg = document.querySelector("#overlayImg");

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

const lightBoxHandler = (e) => {
    console.log(e.target);
    lightBox.className = "show";
}

const closeLightBoxHandler = () => {
    lightBox.className = "hidden";
}

const actionChangeLBImage = (direction) => {
    if ((imgIndex + direction) < 0) {
        imgIndex = img_urls.length - 1;
        overlayImg.src = img_urls[imgIndex];
    } else if ((imgIndex + direction) > img_urls.length - 1) {
        imgIndex = 0;
        overlayImg.src = img_urls[imgIndex];
    } else {
        imgIndex += direction;
        overlayImg.src = img_urls[imgIndex];
    }
}

const changeLBImageHandler = (e) => {

    if (e.target.id === "left-arrow") {
        console.log("Left arrow yahur");
        actionChangeLBImage(-1);

    } else if (e.target.id === "right-arrow") {
        console.log("Right arrow yahur");
        actionChangeLBImage(1);
    }
}


//Event handlers

profileCart.addEventListener("click", profileCartHandler);
cartIcon.addEventListener("click", openCartHandler);

thumbnails.addEventListener("click", thumbnailHandlerIn);
/* thumbnails.addEventListener("mouseover", thumbnailHandlerIn);*/
/* thumbnails.addEventListener("mouseleave", thumbnailHandlerOut); */

mainImg.addEventListener("click", lightBoxHandler);
closeLightBox.addEventListener("click", closeLightBoxHandler);

lightBox.addEventListener("click", changeLBImageHandler);