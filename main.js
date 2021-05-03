let menuOpen = false;
let optionsOpen = false;
let temperatureUnit = "f";
let speedUnits = "mph";
let last = 'Knoxville';
const forecastVariants = ['todayForecast', 'hourlyForecast', 'tenDayForecast', 'weekendForecast', 'monthlyForecast', 'radar', 'videoForecast', 'moreForecasts'];
generateOptionsMenu();
changeColorScheme("default");

if(window.localStorage.getItem('last')){
    last = window.localStorage.getItem('last');
    weatherSearch(last);
}

const tempFButton = $("#f");
const tempCButton = $("#c");
const tempType = $("#tempType");
tempFButton.click(() =>{
    temperatureUnit = "f";
    speedUnits = "mph";
    tempType.html("F");
    weatherSearch(last);
    tempFButton.addClass("selected");
    tempCButton.removeClass("selected");
})
tempCButton.click(() =>{
    temperatureUnit = "c";
    speedUnits = "kph";
    tempType.html("C");
    tempCButton.addClass("selected");
    tempFButton.removeClass("selected");
    weatherSearch(last);
})

$("#threeBars").click(() => {
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

$("#searchbar").keydown((e) =>{
    if(e.key === "Enter"){
        if(e.target.value.length > 0){
            last = $('#searchbar').val();
            window.localStorage.setItem('last', last);
            weatherSearch($('#searchbar').val());
            e.target.value = "";
            e.target.blur();
        }
        
    }
})

getPastLocations();

function weatherSearch(text){
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${text}&days=10&aqi=no&alerts=no`
    fetch(URL)
        .then((res) => res.json())
        .then((data) =>{
            displaytodayForecast(data);
        })
}

function displaytodayForecast(data){
    $('#mainContent').html("");
    for(let forecast of forecastVariants){
        $(`#${forecast}`).click(() => window[`display${forecast}`].apply(null, [data]))
    }
    $('#mainContent').append(
        `<div id="mainSection" class="api-section">
            <div id="location" class="sectionTitle"></div>
            <div id="time"></div>
            <div id="currentConditions">
                <div id="currentConditionsPrimary">
                    <span id="temp"></span>
                    <div id="desc" class="desc"></div>
                    <div id="rainChance"></div>
                </div>
                <div id="currentConditionsSecondary">
                    <img src="#" id="icon"/>
                    <div id="highLow" class="desc"></div>
                </div>
            </div>
        </div>`);

    const location = `${data.location.name}, ${data.location.region}`;
    const time = timeConvert(data.current.last_updated.split(" ")[1]);
    const temp = `${Math.round(data.current[`temp_${temperatureUnit}`])}&deg;`;
    const hiTemp = `${Math.round(data.forecast.forecastday[0].day[`maxtemp_${temperatureUnit}`])}&deg;`
    const lowTemp =`${Math.round(data.forecast.forecastday[0].day[`mintemp_${temperatureUnit}`])}&deg;`

    const condition = data.current.condition.text;
    decideScheme(condition, data.current[`temp_${temperatureUnit}`], data.current.last_updated.split(" ")[1].split(":")[0]);
    $("#location").html(`${location} Weather`);
    $("#time").html(`As of ${time}`);
    $("#temp").html(temp);
    $("#desc").html(condition);
    $("#icon").attr('src', `${data.current.condition.icon}`);
    $("#highLow").html(`${hiTemp}/${lowTemp}`)
    
    populateForecastOverview(location, data.current.last_updated, data.forecast.forecastday[0].hour)
    
    setPastLocations(location);

}
