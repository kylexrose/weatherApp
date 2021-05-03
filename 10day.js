function displaytenDayForecast(data){
    console.log(data.forecast.forecastday)
    
    const location = `${data.location.name}, ${data.location.region}`;
    const time = data.current.last_updated;
    
    $('#mainContent').html("");
    $('#mainContent').append($(
                `<div id="tenDayContainer">
                    <div class="api-section">
                        <div class="sectionTitle">10 Day Weather <span>- ${location}</span></div>
                        <div id="time">As of ${time}</div>
                    </div>
                </div>`));
        for(let i = 0; i < data.forecast.forecastday.length; i++){
            const day = (i === 0) ? 'Today' : "The Next";
            const forecast = data.forecast.forecastday[i];
            const high = Math.round(forecast.day[`maxtemp_${temperatureUnit}`]);
            const low = Math.round(forecast.day[`mintemp_${temperatureUnit}`]);
            const conditionImg = forecast.day.condition.icon;
            const condition = forecast.day.condition.text;
            const precipitation = forecast.day.daily_chance_of_rain;
            const windSpeed = forecast.day[`maxwind_${speedUnits}`];
            //const windDir = windDirection;        
            const newDay = $(
                        `<div class="forecastContainer">
                            <div class="forecastContainerLeft">
                                <div class="forecastContainerDay">${day}</div>
                                <div class="temps"><span class="high">${high}&deg;</span>/<span class="low">${low}&deg;</span></div>
                                <div class="condition"><img src="${conditionImg}"/><span class="conditionText">${condition}</span></div>
                            </div>
                            <div class="forecastContainerRight">
                                <div class="prec"><img src="prec.png"/><span class="chancePrec">${precipitation}%</span></div>
                                <div class="wind"><img src="wind.png"/><span class="wind">SSW ${windSpeed, speedUnits}</span></div>
                                <div class="collapseArrow">&#5167;</div>
                            </div>
                            <div class="forecastCard"></div>
                        </div>`);
            $('.api-section').append(newDay);
            newDay.click(()=> console.log('ForecastClicked'));
            
        }
}
