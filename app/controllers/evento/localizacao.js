var args = arguments[0] || {};

function back(){
	Alloy.Globals.closeWindow();
}

function getCoordsClick(){
	Alloy.Globals.Util.getCoords({address: $.addressField.value}, function(data){

		var address = data.results[0].formatted_address.split(',');
		Alloy.Globals.evento.local_festa = data.results[0].formatted_address;
		Alloy.Globals.evento.localizacao_festa = [data.results[0].geometry.location.lat, data.results[0].geometry.location.lng];
		
		if(address.length == 4){
			$.rua.text = address[0] + ',' + address[1];
			$.bairro.text = address[2];
			$.estado.text = address[3];
		}else{			
			$.rua.text = address[0];
			$.bairro.text = address[1];
			$.estado.text = address[2];
		}
		
		$.mapview.region = {latitude : data.results[0].geometry.location.lat, longitude : data.results[0].geometry.location.lng, 
						longitudeDelta : 0.01, latitudeDelta : 0.01 };
		
		$.mapview.removeAllAnnotations();
		$.mapview.addAnnotation(Alloy.Globals.Map.createAnnotation({
		    latitude: data.results[0].geometry.location.lat,
		    longitude: data.results[0].geometry.location.lng,
		    title: "Endereço",
		    subtitle: data.results[0].formatted_address,
		    pincolor:  Alloy.Globals.Map.ANNOTATION_RED,
		    myid:1 
		}));

	});
}

function concluirClick(){
	Alloy.Globals.closeWindow();
}
