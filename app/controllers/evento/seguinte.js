var args = arguments[0] || {};
var Uis = require('Uis');
var heigth = 80;
var styleText = $.createStyle({
	classes: ['input-text', 'bold', 'font-12'],
});	

var itensAtracao = [];
var itensIngresso = [];

//Add Atracao View
var item = new Uis.Atracao(styleText);
$.contentAtracao.add(item.view);
itensAtracao.push({'item': item});

// Add Ingresso View
var item = new Uis.Ingresso(styleText);
$.contentIngresso.add(item.view);
itensIngresso.push({'item': item});

function back(){
	Alloy.Globals.closeWindow();
}

function concluirClick(){	
	var atr = [];
	var st = [];
	var val = [];
	var tipo = [];
	var desc = [];
	
	for(var i= 0; i < itensAtracao.length; i++){
		var cur = itensAtracao[i].item;
		var curItens = cur.getValues();
		
		atr.push(curItens.atracao);
		st.push(curItens.estilo);
		
	}
	
	for(var i= 0; i < itensIngresso.length; i++){
		var cur = itensIngresso[i].item;
		var curItens = cur.getValues();
		
		val.push(curItens.valor);
		desc.push(curItens.descricao);
		val.push(curItens.tipo);		
	}
	
	Alloy.Globals.evento.atracao = atr;
	Alloy.Globals.evento.estilo = st;
	
	Alloy.Globals.evento.valor = val;
	Alloy.Globals.evento.descricao = desc;
	Alloy.Globals.evento.tipo = tipo;
	
	Alloy.Globals.Util.createEvento(Alloy.Globals.evento, function(data){
		Ti.API.log(data);
	});
	
}

function newAtracao(){
	item = new Uis.Atracao(styleText);
	$.contentAtracao.add(item.view);
	itensAtracao.push({'item': item});
	$.contentAtracao.setHeight(itensAtracao.length * heigth +"dp");
}

function newIngresso(){
	item = new Uis.Ingresso(styleText);
	$.contentIngresso.add(item.view);
	itensIngresso.push({'item': item});
	$.contentIngresso.setHeight(itensIngresso.length * heigth +"dp");
}
