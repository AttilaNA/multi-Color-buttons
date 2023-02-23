
window.addEventListener("load", init);

function init(){
    const button = document.getElementById("count");
    button.addEventListener("click", count);
}

function count(event){
    event.target.textContent++;
}