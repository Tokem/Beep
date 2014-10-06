var url = "http://localhost:8888/beep-api/public/";
//var url = "http://192.168.0.20/beep-api/public/";

var result = {};
var xhr = Ti.Network.createHTTPClient();

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


function doPost(params, url, _callback) {	
	Ti.API.log(params);
	xhr.onload = function(e){
		if(e != null){
			try{
				var json = JSON.parse(this.responseText);
				if(json.msg == "error"){
					 var dialog = Ti.UI.createAlertDialog({
				    message: json.data.msg,
				    ok: 'OK',
				    title: 'Mensagem do Sistema'
				  });
				  dialog.show();
				}
			}catch(e){
				Ti.API.info(e);
			}finally {
				if(_callback){
					_callback(json);
				} 
			}
		}
	};				
	xhr.open("POST", url);
	xhr.send(params);
};