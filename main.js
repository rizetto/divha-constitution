const era = document.querySelector(".era");
const body1 = document.querySelector(".body1");

era.addEventListener("click",() =>{
    body1.classList.toggle(".body1--click");
});