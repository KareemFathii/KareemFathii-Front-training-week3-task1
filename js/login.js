let username  = document.querySelector("#username")
let pass = document.querySelector("#password")
let loginbtn = document.querySelector("#submit_login")
let correct_user = localStorage.getItem("username");
let correct_pass = localStorage.getItem("password");

loginbtn.addEventListener("click",function(e){
 e.preventDefault()
if(username.value === "" || pass.value === ""){
    alert("please fill all the data")
}
else{
    if( correct_user && correct_user.trim() === username.value.trim() &&  correct_pass && correct_pass.trim() === pass.value){
        localStorage.setItem("accepted_user",username.value)
        setTimeout(()=>{
            window.location = "index.html"
        },1500)
    }
    else{
        alert("The username or password incorrect")
    }
}
})