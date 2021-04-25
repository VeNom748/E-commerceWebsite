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