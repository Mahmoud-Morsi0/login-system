var div=document.getElementById("user");
var btn=document.querySelector("button");
div.innerHTML+=localStorage.getItem("userName");
btn.addEventListener("click",function(){
    localStorage.removeItem("userName");
    
})