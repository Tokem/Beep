var args = arguments[0] || {};

function registerClick(){
	
}
function back(){
	Alloy.Globals.closeContent();
}

function facebookClick(){
	Alloy.Globals.openWindow({name: "auth/facebook"});
}

