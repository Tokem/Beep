var args = arguments[0] || {};

function onclick(){
	Alloy.Globals.openWindow({name: "main/detail"});
};

//Click do menu 
function openMenu(){	
	Alloy.Globals.openMenu();
};

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

/*
// Anima o menu 
function animateMenu(){
	if(!Alloy.Globals.toogle){
		//$.content.left = "250dp";
		$.content.animate(Alloy.Globals.animateLeft);
		Alloy.Globals.toogle = true;
		$.mask.visible = true;
		$.mask.zIndex = 3;
		//$.mainNav.tintColor = "#FFF";
	}else{
		$.content.animate(Alloy.Globals.animateRight);
		Alloy.Globals.toogle = false;
		$.mask.visible = false;
		$.mask.zIndex = 1;
		//$.content.left = "0dp";
		//$.mainNav.tintColor = "#696969";
	}	
}

*/