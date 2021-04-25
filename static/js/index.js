var burger= document.querySelector(".burger")
var ul = document.querySelector(".list-items")
let image1= document.getElementById("main-image")
let smallImg= document.getElementsByClassName("gallery-img")
 
burger.addEventListener("click",()=>{
    ul.classList.toggle("top");
    ul.classList.toggle("max-height-resp");
})


// ---for image slider-----
// smallImg[0].onclick = function(){
//     image1.src = smallImg[0].src;
// }
// smallImg[1].onclick = function(){
//     image1.src = smallImg[1].src;
// }
// smallImg[2].onclick = function(){
//     image1.src = smallImg[2].src;
// }
// smallImg[3].onclick = function(){
//     image1.src = smallImg[3].src;
// }

// ------for  login form and reg form-----
let login = document.getElementById("login");
let reg = document.getElementById("reg");
let forms = document.querySelector(".forms");
let indicator = document.querySelector(".indicator")


login.onclick = function(){
    forms.style.transform = "translateX(0%)";
    indicator.style.transform = "translateX(40px)"
    
}
reg.onclick = function(){
    forms.style.transform = "translateX(-99%)";
    indicator.style.transform = "translateX(152px)"
}