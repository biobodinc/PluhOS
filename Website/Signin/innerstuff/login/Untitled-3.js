// JavaScript Document
function create(){
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    localStorage.setItem('username', un);
    localStorage.setItem('password', pw);
}