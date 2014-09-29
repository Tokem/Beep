function back(){
	Alloy.Globals.closeWindow();
}

var items = [];
var iconHeight = "20dp";
 
items.push({
    label : { text : "Privacidade" },
	icon: { image:"/system/icones/help.png", height: iconHeight, left: '30dp'	}
});

items.push({
    label : { text : "Pagamentos"},
	icon: { image:"/system/icones/perfil.png", height: iconHeight, left: '30dp'	}
});

items.push({
    label : { text : "Produtor"},
	icon: { image:"/system/icones/info.png", height: iconHeight, left: '30dp'	}
});

items.push({
    label : { text : "Apagar minha conta" },
	icon: { image:"/system/icones/perfil.png", height: iconHeight, left: '30dp'	}
});

$.section.setItems(items);


