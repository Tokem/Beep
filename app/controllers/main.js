
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
    text:'Geral',
    textAlign:'center',
    font: { fontSize: "16dp", fontWeight: 'bold'}
});

$.content.setTitleControl(titleLabel);

var activeMenuTop  = $.btnActive;
$.mainNav.width = "100%";
$.content.leftNavButton = menuButton;
$.content.rightNavButton = notificationButton;

var navMenu = Alloy.createController('navMenu').getView();
navMenu.open();

//Events 

// Anima o menu 
function animateMenu(){
	if(!Alloy.Globals.toogle){
		$.mainNav.animate(animateLeft);
		Alloy.Globals.toogle = true;
		$.content.children[0].visible = true;
		$.mainNav.tintColor = "#FFF";
	}else{
		$.mainNav.animate(animateRight);
		Alloy.Globals.toogle = false;
		$.content.children[0].visible = false;
		$.mainNav.tintColor = "#696969";
	}	
}

// Evento do menu caixa de mensagem
notificationButton.addEventListener('click', function() {
	alert('\'leftButton\' was clicked!');
});


//Click do menu 
menuButton.addEventListener('click', function() {	
	animateMenu();
});


//Apos renderizar a tela principal ele colocar o menu na posicao 0
$.mainNav.addEventListener('postlayout', function(){
	navMenu.left = 0;
});

// Funcao do swipe (quando desliza o dedo esquerda->direita, direita->esquerda)
$.mainNav.addEventListener('swipe', function(e){
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
	Alloy.Globals.openWindow({name: "main/detail", subview: true});
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
