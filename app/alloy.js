var _screen = []; var _contentScreen = [];
Alloy.Globals.toogle = false;
Alloy.Globals.main;

// Plugin Database

//Plugin de Utilidades
Alloy.Globals.Util = require('util');
Alloy.Globals.Map = require('ti.map');

//Plugin Validação
var validate = require('hdjs.validate');
Alloy.Globals.Validation =  new validate.FormValidator();

//Plugin Facebook
Alloy.Globals.Facebook = require('facebook');

// Animacao para esquerda
Alloy.Globals.animateLeft = Ti.UI.createAnimation({
    left: "250dp",
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration: 500
});

//Animacao para direita 
Alloy.Globals.animateRight    = Ti.UI.createAnimation({
    left: 0,
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration: 500
});

//Inicializa o conteudo, setando a content da tela principal
var _content = null;
Alloy.Globals.setContent = function(content){
	_content = content;
};

//Abre uma nova janela
Alloy.Globals.openWindow = function(screen, params){
	if(screen.subview){
		var current = _screen[_screen.length -1];
		var win = Alloy.createController(screen.name, params).getView();
		current.openWindow(win, {animated : true});	
		_screen.push(win);			
	}else{
		var win = Alloy.createController(screen.name).getView();
		_screen.push(win);
		win.open();
	}
};

//Abre o conteudo interno do menu
Alloy.Globals.openContent = function(screen){
	var win = Alloy.createController(screen.name).getView();
	if(_contentScreen.length > 0){
		_content.removeAllChildren();
	}
	_content.add(win);
	_contentScreen.push({content: win, subview: screen.subview});			

	if(Alloy.Globals.toogle == true){
		Alloy.Globals.openMenu();
	}
};

//
var currentButtonTouched = '';
Alloy.Globals.buttonImageTouched = function(e){
	if(!currentButtonTouched){
		e.source.opacity = '0.5';
		currentButtonTouched = e.source;
	}else{
		currentButtonTouched.opacity = '1';
		currentButtonTouched = '';
	}
};

// Abre o conteudo interno dos menus
Alloy.Globals.closeContent = function(){	
	if(_contentScreen.length > 2){
		var current = _contentScreen.pop();
		if(current.subview){
			_content.removeAllChildren();
			var last = _contentScreen[_contentScreen.length -1];
			_content.add(last.content);
		}
	}else{
		Alloy.Globals.openMenu();
	}
};

// Fecha a janela aberta
Alloy.Globals.closeWindow = function(){
	var win = _screen.pop();
	win.close();
};

//Referente a sair do menu, Fecha todas as janelas e limpa o content
Alloy.Globals.sairWindow = function(){
	_contentScreen = [];
	var win = _screen.pop();
	win.close();
};

//Slide do menu
Alloy.Globals.openMenu = function(){
	if(!Alloy.Globals.toogle){
		_content.animate(Alloy.Globals.animateLeft);
		Alloy.Globals.toogle = true;
	}else{
		_content.animate(Alloy.Globals.animateRight);
		Alloy.Globals.toogle = false;
	}		
};


var loading = false;
var win;
Alloy.Globals.preload = function(){
	if(!loading){
		if(!win){
			win = Ti.UI.createWindow({
				backgroundColor:"transparent"
			});
			var view = Ti.UI.createView({
				width:"50%", height: "20%",
				backgroundImage: "system/background/opacity.png",
				borderRadius: "10dp"	
			});
			
			var style;
			if (Ti.Platform.name === 'iPhone OS'){
			  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
			}
			else {
			  style = Ti.UI.ActivityIndicatorStyle.DARK;
			}
			var activityIndicator = Ti.UI.createActivityIndicator({
			  color: 'green', style:style
			});
			view.add(activityIndicator);
			win.add(view);
			activityIndicator.show();
		}
		win.open();
		loading = true;
	}else{
		win.close();	
		loading = false;	
	}
};

Alloy.Globals.showAlert = function(msg){
	var dialog = Ti.UI.createAlertDialog({
		message: msg,
		 ok: 'OK',
		 title: 'Beep!'
	});
	dialog.show();
};
