var args = arguments[0] || {};
var items = [];

var iconHeight = "20dp";
 
items.push({
    label : { text : "Perfil", screen: "perfil" },
	icon: { image:"/system/icones/perfil.png", height: iconHeight, left: '30dp'	}
});

items.push({
    label : { text : "Minha Conta" },
	icon: { image:"/system/icones/minha_conta.png",	height: iconHeight,	left: '30dp' }
});

items.push({      
	label : {text : "Loja Beep" },
	icon: { image:"/system/icones/festas_passadas.png",	height: iconHeight,	left: '30dp' }
});

items.push({      
	label : { text : "Clube de Vantagens" },
	icon: { image:"/system/icones/clube_vantagens.png",	height: iconHeight,	left: '30dp' }
});

items.push({      
	label : {text : "Festas Passadas" },
	icon: { image:"/system/icones/festas_passadas.png",	height: iconHeight,	left: '30dp' }
});
   
items.push({      
	label : { text : "Favoritos" },
	icon: { image:"/system/icones/favoritos.png", height: iconHeight, left: '30dp' }
});

items.push({      
	label : { text : "Listas" },
	icon: { image:"/system/icones/listas.png", height: iconHeight, left: '30dp' }
});
  
items.push({       
	label : { text : "Configurações" },
	icon: { image:"/system/icones/config.png",	height: iconHeight,	left: '30dp' }
});

items.push({
	label : { text : "Suporte" },
	icon: { image:"/system/icones/suporte.png",	height: iconHeight,	left: '30dp' }
});

items.push({
	label : { text : "Sair" },
	icon: { image:"/system/icones/sair.png",	height: iconHeight,	left: '30dp' },
});

$.section.setItems(items);

$.menuList.addEventListener('itemclick', function(e){
	var index = e.itemIndex;

	switch (index) {
		case 0:
		     Alloy.Globals.openContent({name: "menu/perfil/index"});
		    break;
		case 1:
		     Alloy.Globals.openContent({name: "menu/conta/index"});
		    break;
		case 2:
		     Alloy.Globals.openContent({name: "menu/loja/index"});
		    break;
		case 3:
		     Alloy.Globals.openContent({name: "menu/clube/index"});
		    break;
		case 4:
		     Alloy.Globals.openContent({name: "menu/passadas/index"});
		    break;
		case 5:
		     Alloy.Globals.openContent({name: "menu/favoritos/index"});
		    break;
		case 6:
			 Alloy.Globals.openContent({name: "evento/index"});
		    break;
		case 7:
		     Alloy.Globals.openContent({name: "menu/config/index"});
		    break;
		case 8:
		    Alloy.Globals.openContent({name: "menu/suporte/index"});
		    break;
		case 9:
		     Alloy.Globals.sairWindow();
		    break;
		    
		default:
		    break;
		}
});
