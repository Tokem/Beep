
// Create a Button.
var menuButton = Ti.UI.createButton({
	image: 'system/icones/menu.png',
	height: '22dp',
	width: '22dp'
});

// animations
var animateLeft = Ti.UI.createAnimation({
    left: "250dp",
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration: 300
});

var animateRight    = Ti.UI.createAnimation({
    left: 0,
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration: 300
});

// Create a Button.
var notificationButton = Ti.UI.createButton({
	image: 'system/icones/notification.png',
	width: '20dp', height: '20dp'
});

notificationButton.addEventListener('click', function() {
	alert('\'leftButton\' was clicked!');
});

menuButton.addEventListener('click', function() {
	
	if(!Alloy.Globals.toogle){
		$.win1.animate(animateLeft);
		Alloy.Globals.toogle = true;
	}else{
		$.win1.animate(animateRight);
		Alloy.Globals.toogle = false;
	}
});

$.win1.width = "100%";
$.win2.leftNavButton = menuButton;
$.win2.rightNavButton = notificationButton;

var navMenu = Alloy.createController('navMenu').getView();
navMenu.open();

$.win1.addEventListener('postlayout', function(){
	navMenu.left = 0;
});

function onclick(){
	alert('\'leftButton\' was clicked!');
} 
