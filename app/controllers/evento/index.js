var args = arguments[0] || {};
var slide_in =  Titanium.UI.createAnimation({top:0,  duration: 500});
var slide_out =  Titanium.UI.createAnimation({top:-258,  duration: 500});
var _tipo = '';
var data, hora;
var datetime;

Alloy.Globals.evento = {};

function formatDateTime(param){
	var formated = '';
	if(datetime == 'time'){
		var _split = param.split(' ');
		formated = _split[0];
	}else{
		var _split = param.split('T');
		var _data = _split[0].split('-'); 
		formated = _data[2]+'/'+_data[1]+'/'+_data[0];	
	}	
	return formated;
}

function back(){
	Alloy.Globals.closeContent();
}

function showPicker(e){
	datetime = e.source.tipo;
	if(datetime == null){
		datetime = e.source.getParent().tipo;
	}

	if(datetime == 'time'){
		$.pickerField.setType(Ti.UI.PICKER_TYPE_TIME);	
	}else{
		$.pickerField.setType(Ti.UI.PICKER_TYPE_DATE);
	}
	$.datePickerView.animate(slide_out);
};

function confirmPicker(){	
	$.datePickerView.animate(slide_in);
	if(datetime == 'time'){
		hora = formatDateTime($.pickerField.getValue().toLocaleTimeString());
		$.timeLabel.setText(hora);
	}else{
		data = formatDateTime($.pickerField.getValue().toISOString());
		$.dataLabel.setText(data);
	}
}

function cancelPicker(){
	$.datePickerView.animate(slide_in);
}

function continueClick(){
	var _nome = $.name_festaField.getValue();
	var _tag = $.tag_festaField.getValue();
	
	Alloy.Globals.evento.nome_festa = _nome;
	Alloy.Globals.evento.tag_festa = _tag;
	Alloy.Globals.evento.data_festa = data;
	Alloy.Globals.evento.hora_festa = hora;
	Alloy.Globals.evento.cat_festa = _tipo;

	Alloy.Globals.Validation.run([{
		id: 'nome_festa',
	    value: _nome,
	    display: 'Nome da Festa',    
	    rules: 'required'
	},
	{
		id: 'tag_festa',
	    value: _tag,
	    display:  'Tag do Evento',    
	    rules: 'required'
	},
	{
		id: 'data_festa',
	    value: data,
	    display:  'Data do Evento',    
	    rules: 'required'
	},
	{
		id: 'hora_festa',
	    value: hora,
	    display: 'Hora do Evento',    
	    rules: 'required'
	}], function(errors) {		
		if(errors.length > 0) {
			for (var i = 0; i < errors.length; i++) {
				Ti.API.debug(errors[i].message);
			}
			alert(errors[0].message);
		} else {				
	 		Alloy.Globals.openWindow({name: "evento/seguinte"});
		}
		
	});
};

function localizacaoClick(){
	Alloy.Globals.openWindow({name: "evento/localizacao"});
}

function selectTipo(tipo){
	$._show.backgroundColor="#fff";
	$._bar.backgroundColor="#fff";
	$._boate.backgroundColor="#fff";
	$._casa.backgroundColor="#fff";
	$._recepcao.backgroundColor="#fff";
	$._rua.backgroundColor="#fff";
	$._praia.backgroundColor="#fff";
	_tipo = tipo;
	
	switch (tipo){
		case "show":
				$._show.backgroundColor="#CCC";
		 		break;
		case "bar":
				$._bar.backgroundColor="#CCC";
		 		break;
		case "boate":
				$._boate.backgroundColor="#CCC";
		 		break;
		case "casa":
				$._casa.backgroundColor="#CCC";
		 		break;
		case "recepcao":
				$._recepcao.backgroundColor="#CCC";
		 		break;
		case "rua":
				$._rua.backgroundColor="#CCC";
		 		break;
		case "praia":
				$._praia.backgroundColor="#CCC";
		 		break;
	}
	
}

$.show.addEventListener("click", function(e){
	selectTipo("show");
});


$.bar.addEventListener("click", function(e){
	selectTipo("bar");
});

$.boate.addEventListener("click", function(e){
	selectTipo("boate");
});

$.casa.addEventListener("click", function(e){
	selectTipo("casa");
});

$.rua.addEventListener("click", function(e){
	selectTipo("rua");
});

$.recepcao.addEventListener("click", function(e){
	selectTipo("recepcao");
});

$.praia.addEventListener("click", function(e){
	selectTipo("praia");
});

