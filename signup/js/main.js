var userName=document.getElementById("user-name");
var pass=document.getElementById("password");
var mail=document.getElementById("email");
var btn =document.querySelector("button");

var users=[];

function getUsersIfHave(){
    if(localStorage.getItem("users"!=null)){
        var users=JSON.parse(localStorage.getItem("users"));
    }else{
        users=[];
    }
};


function getUsers(){

    getUsersIfHave();

    if(userName.value==""||pass.value==""||mail.value==""){
        var set=setTimeout(()=>btn.style.border="1px solid red",200);
    }else{     
        var obj={
            newUserName:userName.value,
            newPass:pass.value,
            email:mail.value
        }
        users.push(obj);
        var set=setTimeout(()=>btn.style.border="1px solid green",200);
        (setTimeout(clearBorder,800))();
        clear();
    }
}
function clear(){
    userName.value="";
    pass.value="";
    mail.value="";
}
function clearBorder(){
    ()=>clearTimeout(set);
    btn.style.border="1px solid white";
    saveUsers();


}
function saveUsers(){
    localStorage.setItem("users",JSON.stringify(users));
    location.href="../login/index.html";
}

btn.addEventListener("click",getUsers);