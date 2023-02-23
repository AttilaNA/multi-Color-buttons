
window.addEventListener("load", init);

function init(){
    const button = document.getElementById("change-others-color");
    button.addEventListener("click", changeSiblingColor);
}

function changeSiblingColor(event){
    const siblingElement = event.target.nextElementSibling;
    if(siblingElement.classList.value === ""){
        siblingElement.classList.add("change-color");
    } else {
        siblingElement.classList.remove("change-color");
    }
}