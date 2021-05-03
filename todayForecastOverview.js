

function populateForecastOverview(location, time, forecast){
    $('#todayOverview').remove();

    $("#mainContent").append(`<div id="todayOverview" class="secondarySection">
    <h5><b>Today's Forecast for <span><b>${location}</b></span></b></h5>
    <div id="partsOfToday">
    </div>
    <div id="nextHoursBtn">Next Hours</div>
</div>`)
    const daySectionHours = {Morning: 10, Afternoon: 15, Evening: 20, Overnight: 23};
    for(let section in daySectionHours){
        const currentSectionForecast = forecast[daySectionHours[section]];
        const element = $(`<div class="partsOfToday"></div>`)
        if(extractHour(time) > daySectionHours[section]){
            element.addClass('past');
        }
        element.append($(`<p>${section}</p>`))
        element.append($(`<div>${Math.round(currentSectionForecast["temp_" + temperatureUnit])}&deg;</div>`))
        element.append($(`<img src="${currentSectionForecast.condition.icon}"/>`))
        if(extractHour(time) <= daySectionHours[section]){
            element.append($(`<p><img src="prec.png"/>${currentSectionForecast.chance_of_rain}%</p>`));
        }else{
            element.append($(`<p>--</p>`));
        }
        $('#partsOfToday').append(element)
    }

}

function extractHour(dateAndTime){
    return Number(dateAndTime.split(" ")[1].split(":")[0])
}