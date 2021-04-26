let menuOpen = false;
let optionsOpen = false;
let temperatureUnit = "f";
let last;
generateOptionsMenu();


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
    animateBars();
})

document.querySelector("#options").addEventListener('click', () =>{
    const arrow = document.querySelector("#arrow");
    const menu = document.querySelector("#optionsMenu");

    if(!optionsOpen){
        arrow.innerHTML = "&nbsp&#9650;";
        optionsOpen = true;
        menu.hidden = false;
    }else{
        arrow.innerHTML = "&nbsp&#9660;";
        optionsOpen = false;
        menu.hidden = true;
    }
})

document.querySelector("#searchbar").addEventListener('keydown', (e) =>{
    if(e.key === "Enter"){
        if(e.target.value.length > 0){
            last = e.target.value;
            weatherSearch(e.target.value)
            e.target.value = "";
            e.target.blur();
        }
        
    }
})

function weatherSearch(text){
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${text}&days=10&aqi=no&alerts=no`
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
    console.log(condition)
    document.querySelector("#location").innerHTML = `${location} Weather`;
    document.querySelector("#time").innerHTML = `As of ${time}`;
    document.querySelector("#temp").innerHTML = temp;
    document.querySelector("#desc").innerHTML = condition;
    document.querySelector("#icon").src = data.current.condition.icon;
    document.querySelector("#highLow").innerHTML = `${hiTemp}/${lowTemp}`
}