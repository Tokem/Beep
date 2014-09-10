var args = arguments[0] || {};

var titleLabel = Titanium.UI.createLabel({
    color:'#FFF',
    text:'Entrar',
    textAlign:'center',
    font: { fontSize: "18dp", fontWeight: 'bold'}
});

function cancelarClick(){
 	Alloy.Globals.closeWindow();
}

function entrarClick(){
	Alloy.Globals.openWindow({name: "main"});
}

function facebookClick(){
	Alloy.Globals.openWindow({name: "auth/facebook"});
}

$.winLogin.setTitleControl(titleLabel);