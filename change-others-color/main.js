
window.addEventListener("load", init);

function init(){
    let button = document.getElementById("change-others-color");
    button.addEventListener("click", changeSiblingColor);
}

function changeSiblingColor(event){
    let siblingElement = event.target.nextElementSibling;
    if(siblingElement.classList.value === ""){
        siblingElement.classList.add("change-color");
    } else {
        siblingElement.classList.remove("change-color");
    }
}