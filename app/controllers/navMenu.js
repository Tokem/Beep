var args = arguments[0] || {};
var items = [];

var iconHeight = "20dp";
 
items.push({
    label : { text : "Perfil" },
	icon: { image:"/system/icones/perfil.png", height: iconHeight, left: '30dp'	}
});

items.push({
    label : { text : "Minha Conta" },
	icon: { image:"/system/icones/minha_conta.png",	height: iconHeight,	left: '30dp' }
});

items.push({      
	label : {text : "Festas Passadas" },
	icon: { image:"/system/icones/festas_passadas.png",	height: iconHeight,	left: '30dp' }
});
   
items.push({      
	label : { text : "Favoritos" },
	icon: { image:"/system/icones/favoritos.png",	height: iconHeight,	left: '30dp' }
});

items.push({      
	label : { text : "Lista" },
	icon: { image:"/system/icones/festas_passadas.png",	height: iconHeight,	left: '30dp' }
});
   
items.push({      
	label : { text : "Clube de Vantagens" }
	
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
	icon: { image:"/system/icones/sair.png",	height: iconHeight,	left: '30dp' }
});
   
   
   
   
   
  
$.section.setItems(items);