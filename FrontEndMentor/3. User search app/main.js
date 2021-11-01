//VARIABLES

let generalData;
let objectData;
let searchQuery;
let tempString;

let api_url = 'https://api.github.com/users';

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
let inputListDiv = document.querySelector("#input-list");
let floatingList = document.querySelector("#floating-list");

let themeChanger = document.querySelector("#theme-changer");
let light = document.querySelector("#light");
let sun = document.querySelector(".fa-sun");
let dark = document.querySelector("#dark");
let moon = document.querySelector(".fa-moon");

//FUNCTIONS

async function fetchData() {
    let response = await fetch(api_url);
    let data1 = await response.json();
    return data1;
}

const fetchDataOnSearch = (searchQuery) => {
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

const addSuggestions = () => {

    fetchData()
        .then((data) => {

            floatingList.innerHTML = "";
            let loginNames = [];
            let img_url = [];
            let listElement;

            if (inputArea.value.toLowerCase() !== null && inputArea.value.toLowerCase() !== "") {

                for (let i = 0; i < data.length; i++) {

                    if (data[i].login.includes(inputArea.value.toLowerCase())) {
                        img_url = [...img_url, data[i].avatar_url];
                        loginNames = [...loginNames, data[i].login];
                    }
                }
                for (let i = 0; i < loginNames.length; i++) {

                    listElement = document.createElement("li");
                    listElement.className = "listItem";
                    listElement.innerHTML = `<img src=${img_url[i]} alt="">${loginNames[i]}`;
                    floatingList.append(listElement);
                }
            }

        });

}

const searchOnEnter = (e) => {

    if (e.keyCode === 13) {
        e.preventDefault();
        searchButton.click();
        inputArea.value = "";
    }

}

const buttonSearchHandler = (e) => {
    e.preventDefault();

    let searchQuery = inputArea.value;
    searchQuery = searchQuery.toLowerCase();

    fetchDataOnSearch(searchQuery);

    inputArea.value = "";
}

const themeChangerHandler = (e) => {
    let themeClass = e.target.classList;

    if (themeClass.contains("dark")) {
        console.log("Has dark");
        dark.classList.toggle("hidden");
        moon.classList.toggle("hidden");
        light.classList.toggle("hidden");
        sun.classList.toggle("hidden");

        document.documentElement.className = "theme-dark"
    } else if (themeClass.contains("light")) {
        console.log("Has light");
        dark.classList.toggle("hidden");
        moon.classList.toggle("hidden");
        light.classList.toggle("hidden");
        sun.classList.toggle("hidden");
        document.documentElement.className = "theme-light"
    }
}

const showFloatingList = () => {
    floatingList.parentNode.classList.remove("hidden");
}

const hideFloatingList = (e) => {
    if (e.target.id !== "floating-div") {
        floatingList.parentNode.classList.add("hidden");
    }
}

const searchSuggestionHandler = (e) => {
    tempString = e.target.innerText.toLowerCase();
    fetchDataOnSearch(tempString);
}

//EVENT LISTENERS
searchButton.addEventListener("click", buttonSearchHandler);

themeChanger.addEventListener("click", themeChangerHandler);

inputArea.addEventListener("keyup", searchOnEnter);

inputArea.addEventListener("input", addSuggestions);

inputArea.addEventListener("input", showFloatingList);

document.addEventListener("click", hideFloatingList);

floatingList.addEventListener("click", searchSuggestionHandler);




