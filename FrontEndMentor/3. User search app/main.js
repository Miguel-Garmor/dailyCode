//VARIABLES

let generalData;
let searchQuery;

let imageURL;
let profileName;
let twitterName;
let dateString;
let bio;

let repos;
let followers;
let following;

let userLocation;
let blog;
let gitHub;

//SELECTORS

let searchButton = document.querySelector("#search-button");
let inputArea = document.querySelector("#search-box");

let themeChanger = document.querySelector("#theme-changer");
let light = document.querySelector("#light");
let sun = document.querySelector(".fa-sun");
let dark = document.querySelector("#dark");
let moon = document.querySelector(".fa-moon");

//FUNCTIONS

const searchOnEnter = (e) => {

    if (e.keyCode === 13) {
        e.preventDefault();
        searchButton.click();
    }
}

const searchHandler = (e) => {
    e.preventDefault();
    searchQuery = e.target.parentNode.children[1].value;

    fetch("https://api.github.com/users/" + `${searchQuery}`)
        .then((response) => response.json())
        .then(data => {
            generalData = data;

            imageURL = generalData.avatar_url;

            profileName = generalData.name;
            twitterName = generalData.twitter_username;
            dateString = generalData.created_at;
            bio = generalData.bio;

            repos = generalData.public_repos;
            followers = generalData.followers;
            following = generalData.following;

            userLocation = generalData.location;
            blog = generalData.blog;
            gitHub = generalData.html_url;


            if (bio === null) {
                bio = "No bio...";
            }
            document.querySelector("#profile-pic").innerHTML = `<img src=${imageURL}/>`;
            document.querySelector("#name").innerHTML = `<h1>${profileName}</h1>`;
            document.querySelector("#nick").innerHTML = `<p>@${twitterName}</p>`;
            document.querySelector("#join-date").innerHTML = `<p>Joined ${dateString}</p>`;
            document.querySelector("#bio").innerHTML = `<p>${bio}</p>`;

            document.querySelector(".repos").innerHTML = `<h1>Repos</h1><p>${repos}</p>`;
            document.querySelector(".followers").innerHTML = `<h1>Followers</h1><p>${followers}</p>`;
            document.querySelector(".following").innerHTML = `<h1>Following</h1><p>${following}</p>`;

            document.querySelector(".location").innerHTML = `<i class="fas fa-map-marker-alt"></i><p>${userLocation}</p>`;
            document.querySelector(".twitter").innerHTML = `<i class="fab fa-twitter"></i><p>@${twitterName}</p>`;
            document.querySelector(".link").innerHTML = `<i class="fas fa-pen-fancy"></i><p>${blog}</p>`;
            document.querySelector(".github").innerHTML = `<i class="fab fa-github"></i><p>${gitHub}</p>`;

        });
}

const themeChangeHandler = (e) => {
    let themeText = e.target.innerText;

    if (themeText.includes("dark")) {
        console.log("Has dark");
        dark.classList.toggle("hidden");
        moon.classList.toggle("hidden");
        light.classList.toggle("hidden");
        sun.classList.toggle("hidden");

        document.documentElement.className = "theme-dark"
    } else if (themeText.includes("light")) {
        console.log("Has light");
        dark.classList.toggle("hidden");
        moon.classList.toggle("hidden");
        light.classList.toggle("hidden");
        sun.classList.toggle("hidden");
        document.documentElement.className = "theme-light"
    }
}

//EVENT LISTENERS
searchButton.addEventListener("click", searchHandler);
themeChanger.addEventListener("click", themeChangeHandler);
inputArea.addEventListener("keyup", searchOnEnter);





