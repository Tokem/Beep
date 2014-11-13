var url = "http://localhost:8888/beep-api/public/";
//var url = "http://192.168.0.46/beep-api/public/";

var result = {};
var xhr = Ti.Network.createHTTPClient({timeout: 5000});

exports.login = function(username, password, _callback){	
	var params = {'email': username, 
			  	  'senha': password};
	doPost(params, url+"login/", _callback);
};

exports.register = function(user, email, pass, _pass, _callback){	
	var params = {'usuario': user, 
			  	  'email': email,
			  	  'senha': pass,
			  	  'repetir': _pass};
	doPost(params, url+"usuario/create" ,_callback);
};

exports.createEvento = function(params, _callback){
	doPost(params, url+"evento/create", _callback);
};

exports.getCoords = function(params, _callback){
	params.address = params.address.split(' ').join('+');
	doPost(params, "http://maps.google.com/maps/api/geocode/json?address="+params.address+"&sensor=false", _callback);
};


function doPost(params, url, _callback) {	
	Alloy.Globals.preload();
//	Ti.API.log(params);
	
	xhr.onload = function(e){
		if(e != null){
			var result = this.responseText;
			Ti.API.log(result);
			try{
				var json = JSON.parse(result);
				if(json.msg == "error" && json.data.msg){
				   	Alloy.Globals.showAlert(json.data.msg);
				}

			}catch(e){	
				if(result){			
					Alloy.Globals.showAlert("Não Foi possível conectar ao servidor!");
				}				
			}finally{
				Alloy.Globals.preload();
				if(_callback){
					_callback(json);
				}
				
			}
			
		}
	};	
	
	xhr.onerror = function(e){
		Alloy.Globals.preload();
		var dialog = Ti.UI.createAlertDialog({
		   	message: "Não Foi possível conectar ao servidor xhr!",
		   	ok: 'OK',
		   	title: 'Mensagem do Sistema'
		});
		dialog.show();
	};			
	xhr.open("POST", url);
	xhr.send(params);
};