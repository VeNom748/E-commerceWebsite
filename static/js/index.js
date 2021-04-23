var burger= document.querySelector(".burger")
var ul = document.querySelector(".list-items")
 
burger.addEventListener("click",()=>{
    ul.classList.toggle("top");
    ul.classList.toggle("max-height-resp");
})