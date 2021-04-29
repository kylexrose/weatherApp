const colors = {
    default: {
        "#navbar" : "#066f94",
        "#searchbar" : "#488baa",
        "body" : ["#046f94", "#63b5c5"],
        "#historyBar" : "#488baa",
        "#forecastBar" : "#0b4259"
    },
    Rain: {
        "#navbar" : "#003758",
        "#searchbar" : "#3a647c",
        "body" : ["#003758", "#3da855"],
        "#historyBar" : "#3a647c",
        "#forecastBar" : "#002036"
    },
    Cloudy: {
        "#navbar" : "#6e3f98",
        "#searchbar" : "#8c65ad",
        "body" : ["#6e3f98", "#d6ab98"],
        "#historyBar" : "#8c65ad",
        "#forecastBar" : "#42265b"
    },
    FairNight: {
        "#navbar" : "#113076",
        "#searchbar" : "#4a6094",
        "body" : ["#113076", "#157eba"],
        "#historyBar" : "#4a6094",
        "#forecastBar" : "#0b1c46"
    },
    CloudyNight: {
        "#navbar" : "#113076",
        "#searchbar" : "#4a6094",
        "body" : ["#113076", "#97469a"],
        "#historyBar" : "#4a6094",
        "#forecastBar" : "#0b1c46"
    }
}

function decideScheme(condition, temp, timeHour){
    if(condition.includes("ain") || condition.includes("ist")){
        changeColorScheme("Rain");
    }else if((timeHour < "05" || timeHour > "20") && !condition.includes("loud")){
        changeColorScheme("FairNight");
    }else if((timeHour < "05" || timeHour > "20") && condition.includes("loud")){
        changeColorScheme("CloudyNight");
    }else if(condition.includes("loud")){
        changeColorScheme("Cloudy");
    }else{
        changeColorScheme("default");
    }
}

function changeColorScheme(scheme){
    for (let element in colors[scheme]){
        if(element === "body"){
            document.querySelector(element).style.backgroundImage = `linear-gradient(to bottom, ${colors[scheme][element][0]}, ${colors[scheme][element][1]})`;
        }else{
            document.querySelector(element).style.backgroundColor = colors[scheme][element];
        }
    }
}