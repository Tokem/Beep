var args = arguments[0] || {};

function back(){
	Alloy.Globals.closeWindow();
}

function continuarClick(){
	var email = $.email.value;
	var username = $.email.value;
	var pass = $.password.value;
	var repass = $.repassword.value;
	Alloy.Globals.Validation.run([
		{
			id: 'nameField',
		    value: username,
		    display: 'username',    
		    rules: 'required|min_length[6]|max_length[12]'
		},
		{
			id: 'emailField',
		    value: email,
		    display: 'Email',    
		    rules: 'required|valid_email'
		},
		{
			id: 'passwordField',
		    value: pass,
		    display: 'Password',    
		    rules: 'required|alpha_numeric|exact_length[10]'
		},
		
		{
			id: 'repasswordField',
		    value: repass,
		    display: 'Password',    
		    rules: 'required|alpha_numeric|exact_length[10]'
		}
	], function(){	
		Alloy.Globals.Util.register(username, email, pass, repass,function(data){
			if(data.msg == "success"){
				Alloy.Globals.openWindow({name: "main"});
			}
		});
	});
}

function facebookClick(){
	Alloy.Globals.openWindow({name: "auth/facebook"});
}

