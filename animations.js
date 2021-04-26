
function animateBars(){
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
}
