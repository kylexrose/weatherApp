let menuOpen = false;
let optionsOpen = false;

document.querySelector("#threeBars").addEventListener("click", () => {
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
})

document.querySelector("#options").addEventListener('click', () =>{
    const arrow = document.querySelector("#arrow")
    if(!optionsOpen){
        arrow.innerHTML = "&nbsp&#9650;";
        optionsOpen = true;
        //toggle options menu
    }else{
        arrow.innerHTML = "&nbsp&#9660;";
        optionsOpen = false;
        //toggle options menu
    }
})