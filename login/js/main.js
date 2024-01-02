var btn =document.querySelector("button");
var pass=document.getElementById("password");
var mail=document.getElementById("email");
var users=JSON.parse(localStorage.getItem("users"));
function getUsers(){
    if(mail.value==""||pass.value==""){
        var set=setTimeout(()=>btn.style.border="1px solid red",200);
    }else{
        for (let i = 0; i < users.length; i++) {
            if(mail.value==users[i].email&&pass.value==users[i].newPass){
                var n=users[i].newUserName;
                localStorage.setItem("userName",n);
                location.href="../home/index.html";
                break;
            } ;   
        }
        var set=setTimeout(()=>btn.style.border="1px solid green",200);
        setTimeout(clearBorder,800);
    }
}

function clearBorder(){
    ()=>clearTimeout(set);
    btn.style.border="1px solid white";
}
btn.addEventListener("click",getUsers)