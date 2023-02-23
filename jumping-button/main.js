
window.addEventListener("load", function (){
    let button = document.getElementById("flip-flop");
    button.addEventListener("click", function (){
        if(button.classList.value === ""){
            button.classList.add("right");
            button.textContent = "Go Left!";
        } else {
            button.classList.remove("right");
            button.textContent = "Go Right!";
        }
    })
})