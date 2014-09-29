function loginClick(){
	Alloy.Globals.openWindow({name: "auth/login"});
}
         
function registerClick(){
	//Alloy.Globals.openWindow({name: "auth/register"});
	Alloy.Globals.Util.login('daniel.dms.23@gmail.com', 'dmsqwe123', function(data){
		Ti.API.log(data);
	});
}

$.index.open();
$.index.addEventListener('open', function(){
    $.index.activity.actionBar.hide();
});