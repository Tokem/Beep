// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.toogle = false;

var _screen = [];

Alloy.Globals.openWindow = function(screen){
	if(screen.subview){
		var current = _screen[_screen.length -1];
		var win = Alloy.createController(screen.name).getView();
		current.openWindow(win, {animated : true});	
		//_screen.push(win);			
	}else{
		var win = Alloy.createController(screen.name).getView();
		_screen.push(win);
		win.open();
	}
};

Alloy.Globals.closeWindow = function(){
	var win = _screen.pop();
	win.close();
};