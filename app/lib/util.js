var url = "http://192.168.0.21/beep-api/public/login";

var result = {};
var xhr = Ti.Network.createHTTPClient();

exports.login = function(username, password, _callback){	
	var params = {'email': username, 
			  	  'senha': password};
	doPost(params, _callback);
};

exports.register = function(user, email, pass, _pass, _callback){	
	var params = {'usuario': user, 
			  	  'email': email,
			  	  'senha': pass,
			  	  'repetir': _pass};
	doPost(params, _callback);
};


function doPost(params, _callback) {	
	xhr.onload = function(e){
		if(e != null){
			try{
				Ti.API.log(this.responseText);
				var json = JSON.parse(this.responseText);
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