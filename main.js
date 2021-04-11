let menuOpen = false;
let optionsOpen = false;
let temperatureUnit = "f";
let last;
const icons = {
    Clear: "icons/weather-clear.png",
    "Partly cloudy": "icons/partly-cloudy.png",
    Sunny: "icons/weather-clear.png",
    Overcast: "icons/cloudy.png",
    Mist: "icons/mist.png",
    Rain: "icons/rain.png",
    Thunderstorm: "icons/thunderstorm.png",
    Snow: "icons/snow.png"
}

const tempFButton = document.querySelector("#f");
const tempCButton = document.querySelector("#c");
const tempType = document.querySelector("#tempType");
tempFButton.addEventListener('click', () =>{
    temperatureUnit = "f";
    tempType.innerHTML = "F";
    weatherSearch(last);
    tempFButton.classList.add("selected");
    tempCButton.classList.remove("selected");
})
tempCButton.addEventListener('click', () =>{
    temperatureUnit = "c";
    tempType.innerHTML = "C";
    tempCButton.classList.add("selected");
    tempFButton.classList.remove("selected");
    weatherSearch(last);
})

document.querySelector("#threeBars").addEventListener("click", () => {
    let barArray = document.querySelectorAll(".bar");
    
    if(!menuOpen){
        barArray[0].style.top = "10px";
        barArray[0].style.transform = "rotate(45deg)";
        barArray[1].style.opacity = 0;
        barArray[2].style.top = "-6px";
        barArray[2].style.transform = "rotate(-45deg)";
        menuOpen = true;
        //toggle menu function
    }else{
        barArray[0].style.top = "0px";
        barArray[0].style.transform = "rotate(0deg)";
        barArray[1].style.opacity = 1;
        barArray[2].style.top = "0px";
        barArray[2].style.transform = "rotate(0deg)";
        menuOpen = false;
        //toggle menu function
    }
})

document.querySelector("#options").addEventListener('click', () =>{
    const arrow = document.querySelector("#arrow");
    const menu = document.querySelector("#optionsMenu");

    if(!optionsOpen){
        arrow.innerHTML = "&nbsp&#9650;";
        optionsOpen = true;
        generateOptionsMenu();
        menu.style.opacity = 1;
    }else{
        arrow.innerHTML = "&nbsp&#9660;";
        optionsOpen = false;
        menu.style.opacity = 0;
    }
})

document.querySelector("#searchbar").addEventListener('keydown', (e) =>{
    if(e.key === "Enter"){
        last = e.target.value;
        weatherSearch(e.target.value)
    }
})

function weatherSearch(text){
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=433da0d561164743a18165557210804&q=${text}&days=10&aqi=no&alerts=no`
    console.log(URL);
    fetch(URL)
        .then((res) => res.json())
        .then((data) =>{
            displayPage(data);
            document.querySelector("#mainSection").hidden = false;
        })
}

function displayPage(data){
    const location = `${data.location.name}, ${data.location.region}`;
    const time = timeConvert(data.current.last_updated.split(" ")[1]);
    const temp = `${Math.round(data.current[`temp_${temperatureUnit}`])}&deg;`;
    const hiTemp = `${Math.round(data.forecast.forecastday[0].day[`maxtemp_${temperatureUnit}`])}&deg;`
    const lowTemp =`${Math.round(data.forecast.forecastday[0].day[`mintemp_${temperatureUnit}`])}&deg;`

    const condition = data.current.condition.text;
    console.log(data)
    document.querySelector("#location").innerHTML = `${location} Weather`;
    document.querySelector("#time").innerHTML = `As of ${time}`;
    document.querySelector("#temp").innerHTML = temp;
    document.querySelector("#desc").innerHTML = condition;
    document.querySelector("#icon").src = icons[condition];
    document.querySelector("#highLow").innerHTML = `${hiTemp}/${lowTemp}`
}