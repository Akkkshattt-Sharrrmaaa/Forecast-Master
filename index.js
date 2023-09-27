const { getDepOptimizationConfig, formatPostcssSourceMap } = require("vite");

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data=searchForm");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");


let oldTab = userTab;
const API_KEY = "deaa72d41fd80130a76aebfa79ba2dd7";

currentTab.classList.add("current-tab");


// function that switches tabs w.r.t the click event listener

function switchTab(newTab){

    if(newTab != oldTab){
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");
    }

    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
    }else{
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        getFromSessionStorage();
    }


}

// change tabs on click

userTab.addEventListener("click", ()=>{
    switchTab(userTab);
});

searchTab.addEventListener("click", ()=>{
    switchTab(searchTab);
});


// checks if coordinates are already present in session storage
function getFromSessionStorage(){
    

}