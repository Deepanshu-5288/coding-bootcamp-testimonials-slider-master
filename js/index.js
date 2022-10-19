for(let i=0; i<2; i++){
    document.querySelectorAll(".prev")[i].addEventListener("click", () => {
        if(document.querySelectorAll(".card")[i].classList.contains("john")){
            document.querySelectorAll(".card")[i].classList.toggle("card-hide");
            document.querySelectorAll(".card")[i-1].classList.toggle("card-hide");
        }
    })
    document.querySelectorAll(".next")[i].addEventListener("click", () => {
        if(document.querySelectorAll(".card")[i].classList.contains("tanya")){
            document.querySelectorAll(".card")[i].classList.toggle("card-hide");
            document.querySelectorAll(".card")[i+1].classList.toggle("card-hide");
        }
    })
}