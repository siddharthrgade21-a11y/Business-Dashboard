function register() {
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Account Created Successfully!");

    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(user === savedUser && pass === savedPass){
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    }
    else{
        alert("Wrong Username or Password");
    }
}