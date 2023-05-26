
//form 1
  
function vfun(){
	var uname=document.forms["Myform"]["uname"].value;
	var pword=document.forms["Myform"]["pword"].value;
	
if(uname==null || uname==""){
	document.getElementById("errorBox").innerHTML = "Please Enter username";
	return false;
}
if(pword==null || pword==""){
	document.getElementById("errorBox").innerHTML = "Please Enter Password";
	return false;
}  

if (uname != '' && pword != '' ){
	alert("Login successfully");
           }
}

//form 2
  
function vfun1(){
	var uname=document.forms["Myform1"]["uname"].value;
	var pword=document.forms["Myform1"]["pword"].value;
	var email=document.forms["Myform1"]["email"].value;
	var Repword=document.forms["Myform1"]["Repword"].value;
	
if(uname==null || uname==""){
	document.getElementById("errorBox").innerHTML = "Please Enter username";
	return false;
}
if(email==null || email==""){
	document.getElementById("errorBox").innerHTML="Please Enter Your E-mail Id";
	return false;
}
if(pword==null || pword==""){
	document.getElementById("errorBox").innerHTML = "Please Enter Password";
	return false;
} 
if(Repword==null || Repword==""){
  document.getElementById("errorBox").innerHTML	= "Re Type Your Password";
  return false;
}

if (pword != Repword){
	document.getElementById("errorBox").innerHTML = "Password does not match";
	return false; 
}

if (uname != '' && pword != '' && email != '' && Repword != '' ){
	alert("Login successfully");
           }
}