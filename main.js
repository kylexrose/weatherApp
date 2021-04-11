let menuOpen = false;
let optionsOpen = false;

const icons = {
    Clear: "icons/weather-clear.png",
    "Partly cloudy": "icons/partly-cloudy.png",
    Sunny: "icons/weather-clear.png",
    Overcast: "icons/cloudy.png",
    Mist : "icons/mist.png"
}

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
    const arrow = document.querySelector("#arrow")
    if(!optionsOpen){
        arrow.innerHTML = "&nbsp&#9650;";
        optionsOpen = true;
        //toggle options menu
    }else{
        arrow.innerHTML = "&nbsp&#9660;";
        optionsOpen = false;
        //toggle options menu
    }
})

document.querySelector("#searchbar").addEventListener('keydown', (e) =>{
    if(e.key === "Enter"){
        document.querySelector("#mainSection").hidden = false;
        weatherSearch(e.target.value)
    }
})

function weatherSearch(text){
    const URL = `http://api.weatherapi.com/v1/current.json?key=433da0d561164743a18165557210804&q=${text}&aqi=yes`

    fetch(URL)
        .then((res) => res.json())
        .then((data) =>{
            displayPage(data);
        })
}

function displayPage(data){
    const location = `${data.location.name}, ${data.location.region}`;
    const time = data.current.last_updated.split(" ")[1];
    let correctedTime;
    const tempF = `${Math.round(data.current.temp_f)}&deg;`;
    const tempC = `${data.current.temp_c}&deg;`;
    //const lowTemp;
    //const hiTemp;
    const condition = data.current.condition.text;
    console.log(condition)
    document.querySelector("#location").innerHTML = `${location} Weather`;
    document.querySelector("#time").innerHTML = `As of ${time}`;
    document.querySelector("#temp").innerHTML = tempF;
    document.querySelector("#desc").innerHTML = condition;
    document.querySelector("#icon").src = icons[condition];
}