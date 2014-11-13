var args = arguments[0] || {};

function back(){
	Alloy.Globals.closeWindow();
}

var validationCallback = function(errors) {
	if(errors.length > 0) {
		for (var i = 0; i < errors.length; i++) {
			Ti.API.debug(errors[i].message);
		}
		alert(errors[0].message);
	} else {
		
		if($._termos.visible == 1){
			Alloy.Globals.Util.register($.usernameField.value, $.emailField.value, $.passwordField.value, $.repasswordField.value, function(result){
				Ti.API.log(result.msg);
				if(result.msg == "success"){
					Alloy.Globals.db.setUser(result.data);
					Alloy.Globals.openWindow({name: "auth/confirmar"});
				}else{
					var msg = result.data.usuario;
					
					if(result.data.email && !msg){						
						msg = result.data.email;
					}
					
					var dialog = Ti.UI.createAlertDialog({
					   	message: msg,
					   	ok: 'OK',
					   	title: 'Mensagem do Sistema'
					});
					dialog.show();					
				}
			});
		}else{
			alert("É necessário aceitar os termos e condições para proceguir");	
		}
		
	}
};

function continuarClick(){
	var email = $.emailField.value;
	var username = $.usernameField.value;
	var pass = $.passwordField.value;
	var repass = $.repasswordField.value;
	
	Alloy.Globals.Validation.run([
		{
			id: 'usernameField',
		    value: $.usernameField.value,
		    display: 'username',    
		    rules: 'required|min_length[6]|max_length[20]'
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
		    display: 'Senha',    
		    rules: 'required|alpha_numeric|min_length[8]'
		},		
		{
			id: 'repasswordField',
		    value: repass,
		    display: 'Confirmar senha',    
		    rules: 'required|alpha_numeric|min_length[8]'
		}
	],validationCallback);
};

function facebookClick(){
	Alloy.Globals.openWindow({name: "auth/facebook"});
};

function termosClick(){
	$._termos.visible = !$._termos.visible;
}

