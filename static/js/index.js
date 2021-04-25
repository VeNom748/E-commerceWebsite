var burger= document.querySelector(".burger")
var ul = document.querySelector(".list-items")
let image1= document.getElementById("main-image")
let smallImg= document.getElementsByClassName("gallery-img")



burger.addEventListener("click",()=>{
    ul.classList.toggle("top");
    ul.classList.toggle("max-height-resp");
})


// ---for image slider-----
smallImg[0].onclick = function(){
    image1.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    image1.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    image1.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    image1.src = smallImg[3].src;
}


