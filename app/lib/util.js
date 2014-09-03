var url = "http://empresajr.com/app/processa.php";

var result = {};
var xhr = Ti.Network.createHTTPClient();

exports.login = function(username, password, _callback){	
	var params = {'username': username, 
			  	  'password': password,
  		  		  'type': 'mobile',
		  		  'class': 'login'};
	doPost(params, _callback);
};

exports.sendQuestionario = function(data, _callback){
	doPost(data, _callback);
};

exports.getProjeto = function(_id, _callback){
	var params = {'usuarios_id': _id, 
				  'type': 'mobile',
				  'class': 'getProjeto'};
	doPost(params, _callback);
};

exports.sendArquivos = function(_id){
	var params = {'projetos_id': _id, 
				  'type': 'mobile',
				  'class': 'sendArquivos'};
	doPost(params);
};


exports.newSac = function(nome, assunto, email, telefone, mensagem, _callback){
	var params = {'nome': nome, 
				  'assunto': assunto,
				  'email': email,
				  'telefone': telefone,
				  'mensagem': mensagem,
				  'type': 'mobile',
				  'class': 'newSac'};
	doPost(params, _callback);
};

exports.newComentario = function(descricao, projetos_id, usuarios_id, _callback){
	var params = {'descricao': descricao, 
				  'projetos_id': projetos_id,
				  'usuarios_id': usuarios_id,
				  'type': 'mobile',
				  'class': 'newComentario'};
	doPost(params, _callback);
};

function doPost(params, _callback) {	
	if(Titanium.Network.networkTypeName != 'NONE' && 
	Titanium.Network.networkTypeName != 'UNKNOWN'){		
		xhr.onload = function(e){
			if(e != null){
				try{
					var json = JSON.parse(this.responseText);
					Ti.API.info(json);
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
		xhr.send(params) ;
	}else{
		alert('Sem conexão com a internet!');
	}
};