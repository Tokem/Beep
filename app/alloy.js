var _screen = []; var _contentScreen = [];
Alloy.Globals.toogle = false;
Alloy.Globals.main;
Alloy.Globals.Util = require('util');
var validate = require('hdjs.validate');

Alloy.Globals.Validation =  new validate.FormValidator();;

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


//Inicializa o conteudo
var _content = null;
Alloy.Globals.setContent = function(content){
	_content = content;
};

//Abre uma nova janela
Alloy.Globals.openWindow = function(screen){
	if(screen.subview){
		var current = _screen[_screen.length -1];
		var win = Alloy.createController(screen.name).getView();
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
