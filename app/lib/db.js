var db = Ti.Database.install('/mydata/db_beep.sqlite','beep');
// Ti.Database.open('beep'); 
	 
function Usuario(){
	this.table = "usuario";
	
	this.populate = function(param){
		var data = ({ id: param.fieldByName('id'), nome: param.fieldByName('nome'), email: param.fieldByName('email'),
					username: param.fieldByName('username'), tokem: param.fieldByName('tokem'),
					categoria: param.fieldByName('categoria'), beeps: param.fieldByName('beeps'),
					imagem: param.fieldByName('imagem'), permissao: param.fieldByName('permissao') });
		return data;
	};
	
	this.getById = function(id){
		var rows = db.execute("SELECT * FROM "+this.table+" WHERE id='"+id+"'");
		var fieldCount = 0;
		if ( (Ti.Platform.name === 'android') || (Ti.version >= '3.3.0') ) {
		    fieldCount = rows.fieldCount;
		} else {
		    fieldCount = rows.fieldCount();
		}
		//Ti.API.info('Field count: ' + fieldCount);
		return this.populate(rows);
	};
	
	this.fetchAll = function(){
		var data = [];
		var rows = db.execute("SELECT * FROM "+this.table);
		while (rows.isValidRow()){
		    data.push(this.populate(rows));
		    rows.next();    
		};		
				
		return data;
	};

	this.save = function(param){
		param.id = 1;
		if(!param.beeps)
			param.beeps = 0;
		db.execute("REPLACE INTO "+this.table+" (id, nome, email, username, tokem, categoria, beeps, imagem, permissao) VALUES ("+param.id+", '"+param.nome+"', '"+param.email+"', '"+param.username+"', '"+param.tokem+"', '"+param.categoria+"', "+param.beeps+", '"+param.imagem+"', '"+param.permissao+"')");
			
		//var result = this.getById(param.id);
		var result = db.getLastInsertRowId();
		return result;
	};
	
	this.clear = function(){
		 db.execute("TRUNCATE TABLE "+this.table);
	};
}


function Evento(){
	this.table = "evento";
	
	this.populate = function(param){
		var data = ({ id: param.fieldByName('id'), nome: param.fieldByName('nome'), tag: param.fieldByName('tag'),
					data: param.fieldByName('data'), hora: param.fieldByName('hora'),
					local: param.fieldByName('local'), localizacao: param.fieldByName('localizacao'),
					categoria: param.fieldByName('categoria'), imagem: param.fieldByName('imagem'), ativo: param.fieldByName('ativo')  });
		return data;
	};
	
	this.getById = function(id){
		var rows = db.execute("SELECT * FROM "+this.table+" WHERE id='"+id+"'");
		var fieldCount = 0;
		if ( (Ti.Platform.name === 'android') || (Ti.version >= '3.3.0') ) {
		    fieldCount = rows.fieldCount;
		} else {
		    fieldCount = rows.fieldCount();
		}
		//Ti.API.info('Field count: ' + fieldCount);
		return this.populate(rows);
	};
	
	this.fetchAll = function(){
		var data = [];
		var rows = db.execute("SELECT * FROM "+this.table);
		while (rows.isValidRow()){
		    data.push(this.populate(rows));
		    rows.next();    
		};		
				
		return data;
	};

	this.save = function(param){
		if(!param.beeps)
			param.beeps = 0;
		db.execute("REPLACE INTO "+this.table+" (id, nome, tag, data, hora, local, localizacao, categoria, imagem, ativo) "+
				 "VALUES ('"+param.id+"','"+param.nome+"', '"+param.tag+"', '"+param.data+"', '"+param.hora+"', '"+param.local+"', '"+param.localizacao+"', '"+param.categoria+"', '"+param.imagem+"', '"+param.ativo+"')");
			
		var result = db.getLastInsertRowId( );
		return result;
	};
	
	this.clear = function(){
		 db.execute("TRUNCATE TABLE "+this.table);
	};
}

exports.Usuario = Usuario;
exports.Evento = Evento;