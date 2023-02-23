
window.addEventListener("load", init);

function init(){
    const button = document.getElementById("change-color");
    button.addEventListener("click", changeColor);
}

function changeColor(event){
    if(event.target.classList.value === ""){
        event.target.classList.value = "red";
    } else {
        event.target.classList.remove("red");
    }
}