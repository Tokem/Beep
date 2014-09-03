
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
		$.nav.animate(animateLeft);
		Alloy.Globals.toogle = true;
	}else{
		$.nav.animate(animateRight);
		Alloy.Globals.toogle = false;
	}
});

$.nav.width = "100%";
$.content.leftNavButton = menuButton;
$.content.rightNavButton = notificationButton;

var navMenu = Alloy.createController('navMenu').getView();
navMenu.open();

$.nav.addEventListener('postlayout', function(){
	navMenu.left = 0;
});

function onclick(){
	var detail =  Alloy.createController('main/detail').getView();
	$.nav.openWindow(detail, {animated : true});
} 
