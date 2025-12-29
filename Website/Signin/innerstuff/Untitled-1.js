// JavaScript Document
function checkPassword(){
	var password = "qwertyuiopasdfghjklzxcvbnm";
var input = document.getElementById("pswd").value;
	if(input == password) {
		alert("good Job");
	}
	else{
		alert("Incorrect");
	}
}