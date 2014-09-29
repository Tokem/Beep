var args = arguments[0] || {};

if(Titanium.Platform.name != 'android'){
	var titleLabel = Titanium.UI.createLabel({
	    color:'#FFF',
	    text:'Entrar',
	    textAlign:'center',
	    font: { fontSize: "18dp", fontWeight: 'bold'}
	});
	
	$.winLogin.setTitleControl(titleLabel);
}

function cancelarClick(){
 	Alloy.Globals.closeWindow();
}

function entrarClick(){
	Alloy.Globals.openWindow({name: "main"});
}

function facebookClick(){
	Alloy.Globals.openWindow({name: "auth/facebook"});
}

