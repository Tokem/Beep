function back(){
	Alloy.Globals.closeWindow();
}

var items = [];
var iconHeight = "20dp";
 
items.push({
    label : { text : "Privacidade", left:"30dp" }
});

items.push({
    label : { text : "Pagamentos", left:"30dp"}
});

items.push({
    label : { text : "Produtor", left:"30dp"}
});

items.push({
    label : { text : "Apagar minha conta", left:"30dp" }
});

$.section.setItems(items);


