

function generate() {


    let complexity = document.getElementById("generate").value;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";

    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;
    document.getElementById("lastNums").innerHTML += password + "<br />";

}
document.getElementById("length").innerHTML = "Length: 25";
document.getElementById("generate").oninput = function () {

    if (document.getElementById("generate").value > 0) {
        document.getElementById("length").innerHTML = "Length: 8" + document.getElementById("generate").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";
    }

}
function copyPassword() {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");

}