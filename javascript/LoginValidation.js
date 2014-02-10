function SetFocus(form)
{
	login.TxtUsername.focus();
}

function checkLength(form)
{	
	if(login.TxtUsername.value=="")
	{
		alert("Username should not be blank");
		login.TxtPassword.value="";
		login.TxtUsername.focus();
	}
	else if(login.TxtPassword.value.length<6)
	{
		alert("Your password must be atleast 6 character long");
		login.TxtPassword.value="";
		login.TxtPassword.focus();
	}
	else
	{
		window.location="Home.html";
	}
} 

