function loginClick(){
	Alloy.Globals.openWindow({name: "auth/login"});
}
         
function registerClick(){
	Alloy.Globals.openWindow({name: "auth/register"});
}

$.index.open();
$.index.addEventListener('open', function(){
    $.index.activity.actionBar.hide();
});