var args = arguments[0] || {};

function cancelarClick(){
 	Alloy.Globals.closeWindow();
}

var validationCallback = function(errors) {
	if(errors.length > 0) {
		for (var i = 0; i < errors.length; i++) {
			Ti.API.debug(errors[i].message);
		}
		alert(errors[0].message);
	} else {
		Alloy.Globals.Util.login($.login.value, $.password.value, function(data){
			if(data.msg == "success"){
				Alloy.Globals.openWindow({name: "main"});
			}
		});
	}
};

function entrarClick(){
	Alloy.Globals.Validation.run([{
		id: 'emailField',
	    value: $.login.value,
	    display: 'Email',    
	    rules: 'required|valid_email'
	}], validationCallback);	
}

function facebookClick(){
	Alloy.Globals.openWindow({name: "auth/facebook"});
}

// Use the Alloy.Globals.Facebook namespace to make Facebook module API calls
var facebook = Alloy.Globals.Facebook;
facebook.appid = "650126821747670";
facebook.permissions = ["email", "friends"];
$.fbButton.style = facebook.BUTTON_STYLE_NORMAL;
