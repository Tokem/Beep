var args = arguments[0] || {};

var titleLabel = Titanium.UI.createLabel({
    color:'#FFF',
    text:'Criar conta',
    textAlign:'center',
    font:{fontWeight: "bold", fontSize: "16dp"}
});

$.winFacebook.setTitleControl(titleLabel);

var btn = Ti.UI.createButton({
	height: "20dp", width: "40dp", backgroundImage: '/system/icones/back.png'
});

btn.addEventListener('click', function(e){
	Alloy.Globals.closeWindow();
});
$.winFacebook.leftNavButton = btn;
