
// animations
var animateLeft = Ti.UI.createAnimation({
    left: "250dp",
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration: 500
});

var animateRight    = Ti.UI.createAnimation({
    left: 0,
    curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
    duration: 500
});

// Create a Button.
var menuButton = Ti.UI.createButton({
	image: 'system/icones/menu.png',
	height: '22dp',
	width: '22dp'
});

var notificationButton = Ti.UI.createButton({
	image: '/system/icones/notificacao.png',
	width: '20dp', height: '20dp',
});

// Label title
var titleLabel = Titanium.UI.createLabel({
    color:'#696969',
    text:'GERAL',
    textAlign:'center',
    shadowColor:'#eee',shadowOffset:{x:0,y:1}
});

$.content.setTitleControl(titleLabel);

var activeMenuTop  = $.btnActive;
$.nav.width = "100%";
$.content.leftNavButton = menuButton;
$.content.rightNavButton = notificationButton;

var navMenu = Alloy.createController('navMenu').getView();
navMenu.open();

//Events
function animateMenu(){
	if(!Alloy.Globals.toogle){
		$.nav.animate(animateLeft);
		Alloy.Globals.toogle = true;
		$.content.children[0].visible = true;
		$.nav.tintColor = "#FFF";
	}else{
		$.nav.animate(animateRight);
		Alloy.Globals.toogle = false;
		$.content.children[0].visible = false;
		$.nav.tintColor = "#696969";
	}	
}

notificationButton.addEventListener('click', function() {
	alert('\'leftButton\' was clicked!');
});

menuButton.addEventListener('click', function() {	
	animateMenu();
});

$.nav.addEventListener('postlayout', function(){
	navMenu.left = 0;
});

$.nav.addEventListener('swipe', function(e){
	if(e.direction == "right"){
		if(Alloy.Globals.toogle == true){
			animateMenu();
		}
	}
	
	if(e.direction == "left"){
		if(Alloy.Globals.toogle == false){
			animateMenu();
		}
	}
	
	animateMenu();
});

function onclick(){
	var detail =  Alloy.createController('main/detail').getView();
	$.nav.openWindow(detail, {animated : true});
} 

function eventoDblClick(){
	Ti.API.log('dbl Click');
}

function topTouchStart(e){
	e.source.backgroundColor= "#dadada";

	if(e.source.icon != activeMenuTop.icon){
		activeMenuTop.children[0].setImage("/system/icones/"+activeMenuTop.icon+"_inactive.png");
		e.source.children[0].setImage("/system/icones/"+e.source.icon+".png");
		activeMenuTop = e.source;
	}
}

function topTouchEnd(e){
	e.source.backgroundColor = '#F2F2F2';	
}
