var args = arguments[0] || {};

function back(){
	Alloy.Globals.openMenu();
}

var items = [];
var iconHeight = "20dp";
 
items.push({
    label : { text : "Privacidade" },
});

items.push({
    label : { text : "Pagamentos"},
});

items.push({
    label : { text : "Produtor"},
});

items.push({
    label : { text : "Apagar Minha Conta" },
});

$.section.setItems(items);