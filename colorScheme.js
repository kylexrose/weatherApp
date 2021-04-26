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
        "body" : ["#a88cc1", "#f7fbfc"],
        "#historyBar" : "#8c65ad",
        "#forecastBar" : "#42265b"
    },
    Dark: {
        "#navbar" : "#113076",
        "#searchbar" : "#4a6094",
        "body" : ["#113076", "#157eba"],
        "#historyBar" : "#4a6094",
        "#forecastBar" : "071a49"
    }
}

function decideScheme(condition, temp, time){
    //if 20:00 < time or time < 06:00 ---- dark theme
    //if condition === rain or showers or precipitation ---- Rain theme
    //if if temp < 40deg ---- cold theme
    //else default
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