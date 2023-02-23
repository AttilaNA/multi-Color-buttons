
window.addEventListener("load", init)

function init(){
    let button = document.getElementById("flip-flop");
    button.addEventListener("click", flipFlop);
}

function flipFlop(event){
    if(event.target.classList.value === ""){
        event.target.classList.add("right");
        event.target.textContent = "Go Left!";
    } else {
        event.target.classList.remove("right");
        event.target.textContent = "Go Right!";
    }
}