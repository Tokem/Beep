function loginClick(){
	var main = Alloy.createController('main').getView();
	main.open();
	$.index.close();
}

function showRegister(){
	$.form.visible = true;
}

$.index.open();
