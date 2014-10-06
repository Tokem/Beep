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

$.configList.addEventListener('itemclick', function(e){
	var index = e.itemIndex;

	switch (index) {
		case 0:
		     Alloy.Globals.openWindow({name: "menu/conta/privacidade"});
		    break;
		case 1:
		     Alloy.Globals.openWindow({name: "menu/conta/pagamento"});
		    break;
		case 2:
		    Alloy.Globals.openWindow({name: "menu/conta/produtor" });
		    break;
		case 3:
		    Alloy.Globals.openWindow({name: "menu/conta/deletar"});
		    break;
		    		    
		default:
		    break;
		}
});