Alloy.Globals.toogle = false;
Alloy.Globals.main;
Alloy.Globals.Util = require('util');

// animations
Alloy.Globals.animateLeft = Ti.UI.createAnimation({
    left: "250dp",
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration: 500
});

Alloy.Globals.animateRight    = Ti.UI.createAnimation({
    left: 0,
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration: 500
});

var _screen = []; var _contentScreen = [];

var _content = null;
Alloy.Globals.setContent = function(content){
	_content = content;
};

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

Alloy.Globals.closeContent = function(){
	/*Ti.API.log(_contentScreen);
	
	_contentScreen.pop();
	var win = _contentScreen[_contentScreen.length - 1];

	_content.removeAllChildren();
	_content.add(win);	*/
	
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

Alloy.Globals.closeWindow = function(){
	var win = _screen.pop();
	win.close();
};

Alloy.Globals.openMenu = function(){
	if(!Alloy.Globals.toogle){
		//$.content.left = "250dp";
		_content.animate(Alloy.Globals.animateLeft);
		Alloy.Globals.toogle = true;
//		_mask.visible = true;
//		_mask.zIndex = 3;
		//$.mainNav.tintColor = "#FFF";
	}else{
		_content.animate(Alloy.Globals.animateRight);
		Alloy.Globals.toogle = false;
//		_mask.visible = false;
//		_mask.zIndex = 1;
		//$.content.left = "0dp";
		//$.mainNav.tintColor = "#696969";
	}	
	
};
