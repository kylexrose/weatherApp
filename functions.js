function timeConvert(time){
    time = time.split(":");
    newTime = "";
    if(time[0] == "00"){
        return `12:${time[1]} am`
    }else if(Number(time[0]) > 12){
        time[0] -= 12;
        return `${time[0]}:${time[1]} pm`
    }else if(Number(time[0] === 12)){
        return `12:${time[1]} pm`
    }else if(Number(time[0] < 12)){
        return `${time[0]}:${time[1]} am`;
    }
}