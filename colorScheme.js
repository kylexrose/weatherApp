const colors = {
    Sunny: {
        "#navbar" : "#066f94",
        "#searchbar" : "#488baa",
        "body" : ["#69a9bf", "#f7fbfc"],
        "#historyBar" : "#488baa",
        "#forecastBar" : "#0b4259"
    },
    Rain: {
        "#navbar" : "#0b4259",
        "#searchbar" : "#488baa",
        "body" : ["#7fb89a", "#f7fbfc"],
        "#historyBar" : "#488baa",
        "#forecastBar" : "#0b4259"
    },
    default: {
        "#navbar" : "#6e3f98",
        "#searchbar" : "#8c65ad",
        "body" : ["#a88cc1", "#f7fbfc"],
        "#historyBar" : "#8c65ad",
        "#forecastBar" : "#42265b"
    }
}

function changeColorScheme(scheme){
    for (let element in colors[scheme]){
        console.log(document.querySelector(element))
        if(element === "body"){
            document.querySelector(element).style.backgroundImage = `linear-gradient(to bottom, ${colors[scheme][element][0]}, ${colors[scheme][element][1]})`;
        }else{
            document.querySelector(element).style.backgroundColor = colors[scheme][element];
        }
    }
}