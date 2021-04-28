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
    Cold: {
        "#navbar" : "#6e3f98",
        "#searchbar" : "#8c65ad",
        "body" : ["#6e3f98", "#f7fbfc"],
        "#historyBar" : "#8c65ad",
        "#forecastBar" : "#42265b"
    },
    ColdNight: {
        "#navbar" : "#113076",
        "#searchbar" : "#4a6094",
        "body" : ["#113076", "#157eba"],
        "#historyBar" : "#4a6094",
        "#forecastBar" : "#0b1c46"
    },
    WarmNight: {
        "#navbar" : "#113076",
        "#searchbar" : "#4a6094",
        "body" : ["#113076", "#97469a"],
        "#historyBar" : "#4a6094",
        "#forecastBar" : "#0b1c46"
    }
}

function decideScheme(condition, temp, timeHour){
    console.log(timeHour, temp)
    if(condition.includes("ain")){
        changeColorScheme("Rain");
    }else if((timeHour < "05" || timeHour > "20") && temp >= 70){
        changeColorScheme("WarmNight");
    }else if((timeHour < "05" || timeHour > "20") && temp <= 70){
        changeColorScheme("ColdNight");
    }else if(temp <= 40){
        changeColorScheme("Cold");
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