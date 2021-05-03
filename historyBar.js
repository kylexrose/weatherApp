//["past Location", "past Location"]
let locationHistoryArray = [];
let scrollLocation = 0;

const outer = $('#outerHistory');

var updateUI = function() {
    const maxWidth = outer.outerWidth(true);
    let actualWidth = 0;
    $.each($('#historyBody >'), function(i, item) {
        actualWidth += $(item).outerWidth(true);
    });
    if (actualWidth >= maxWidth){
        $('#historyForward').attr('hidden', false);
    }else{
        $('#historyForward').attr('hidden', true);
    }
};

$('#historyBack').click(() =>{
    const leftPos = outer.scrollLeft();
    outer.animate({scrollLeft: leftPos - 400}, 500, function() {
        if (outer.scrollLeft() <= 0){
            $('#historyBack').css('display', true);
        }
    });
});

$('#historyForward').click(function() {
    $('#historyBack').attr('hidden', false);
    const leftPos = outer.scrollLeft();
    outer.animate({scrollLeft: leftPos + 400}, 500);
});

function getPastLocations(){
    
    if(window.localStorage.getItem('history') !== "undefined" && window.localStorage.getItem('history') !== null){
        locationHistoryArray = JSON.parse(window.localStorage.getItem('history'));
        populateHistoryBar(locationHistoryArray);
    }
}

function setPastLocations(location){
    if(locationHistoryArray.indexOf(location) === -1){
        locationHistoryArray.unshift(location);
        window.localStorage.setItem('history', JSON.stringify(locationHistoryArray));
        getPastLocations();
    }
}

function populateHistoryBar(historyArray){
    $("#historyBody").html("");
    for(let i = 0; i < historyArray.length; i++){
        const URL = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${historyArray[i]}&days=10&aqi=no&alerts=no`
        fetch(URL)
            .then((res) => res.json())
            .then((data) =>{
                createHistoryElement(data, i);
            })
    }
    
}

function createHistoryElement(data, i){
    const historyCell = $(`<div id="${data.location.name}${data.location.region}" class="historyCell clickable"><img class="historyIcon" src="${data.current.condition.icon}"/><span class="historyTemp">${Math.round(data.current[`temp_${temperatureUnit}`])}&deg;</span>${data.location.name}, ${data.location.region}</div>`)
    historyCell.click(() => {
        displaytodayForecast(data);
        last = `${data.location.name}, ${data.location.region}`;
    });
    $("#historyBody").append(historyCell);
    const dots = $('<span class="historyDots">&#10247;</span>');
    dots.click(()=> {
        removeHistory(i);
        historyCell.remove();
    })
    historyCell.append(dots);
    updateUI();
}

function removeHistory(index){
    locationHistoryArray.splice(index, 1);
    window.localStorage.setItem('history', JSON.stringify(locationHistoryArray));
}