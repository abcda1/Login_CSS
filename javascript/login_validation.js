
		
		function checkLength(form)
		{	
			if(login.txtUser.value.length<6)
			{
				alert("Your username must be 6 character");
				login.txtUser.value="";
				login.txtUser.focus();
			}

			if(login.txtPassword.value.length<6)
			{
				alert("Your password must be 6 character");
				login.txtPassword.value="";
				login.txtPassword.focus();
			}
			
			
		} 

