
window.addEventListener("load", init)

function init(){
    const button = document.getElementById("flip-flop");
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