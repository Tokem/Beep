var args = arguments[0] || {};

var db = require('db');
var Usuario = new db.Usuario();

function cancelarClick(){
 	Alloy.Globals.closeWindow();
}

function entrarClick(){
	Alloy.Globals.Validation.run([{
		id: 'loginField',
	    value: $.loginField.value,
	    display: 'Email',    
	    rules: 'required|valid_email'
	},
	{
		id: 'passwordField',
	    value: $.passwordField.value,
	    display: 'Senha',    
	    rules: 'required|alpha_numeric'
	}], validationCallback);	
}

var validationCallback = function(errors) {
	if(errors.length > 0) {
		for (var i = 0; i < errors.length; i++) {
			Ti.API.debug(errors[i].message);
		}
		alert(errors[0].message);
	} else {
		Alloy.Globals.Util.login($.loginField.value, $.passwordField.value, function(result){
			if(result.msg == "success"){
				
				result.data.email = $.loginField.value;
				result.data.nome = "daniel da teste";
				result.data.senha = $.passwordField.value;
				
				if(Usuario.save(result.data)){
					Alloy.Globals.openWindow({name: "main"});
				}
			}
		});
	}
};

function facebookClick(){
	Alloy.Globals.openWindow({name: "auth/facebook"});
}

// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls
var facebook = Alloy.Globals.Facebook;
facebook.appid = "650126821747670";
facebook.permissions = ["email", "friends"];
$.fbButton.style = facebook.BUTTON_STYLE_NORMAL;
