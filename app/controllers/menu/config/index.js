var args = arguments[0] || {};

function back(){
	Alloy.Globals.openMenu();
}

var items = [];
var iconHeight = "20dp";
 
items.push({
    label : { text : "Ajuda" },
	icon: { image:"/system/icones/help.png", height: iconHeight, left: '30dp'	}
});

items.push({
    label : { text : "Perfil"},
	icon: { image:"/system/icones/perfil.png", height: iconHeight, left: '30dp'	}
});

items.push({
    label : { text : "Informações de Conta"},
	icon: { image:"/system/icones/info.png", height: iconHeight, left: '30dp'	}
});

items.push({
    label : { text : "Beep!" },
	icon: { image:"/system/icones/beep-gray.png", height: iconHeight, left: '30dp'	}
});

$.section.setItems(items);


$.configList.addEventListener('itemclick', function(e){
	var index = e.itemIndex;

	switch (index) {
		case 0:
		     Alloy.Globals.openContent({name: "menu/config/index"});
		    break;
		case 1:
		     Alloy.Globals.openContent({name: "menu/config/index"});
		    break;
		case 2:
		    Alloy.Globals.openWindow({name: "menu/config/informacao" });
		    break;
		case 3:
		    Alloy.Globals.openContent({name: "menu/config/index"});
		    break;
		    		    
		default:
		    break;
		}
});