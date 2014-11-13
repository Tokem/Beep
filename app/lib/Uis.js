function Atracao(param){

	var idView = Ti.UI.createView({
		left:"20dp", right:"20dp", height:"80dp", layout:"vertical"
	});
	
	var view1 = Ti.UI.createView({
		height: "30dp"
	});
		var image1 = Ti.UI.createImageView({
			height: "30dp", width: "35dp", image: "/system/background/itens-eventos.png",
			left: "0dp", zIndex: 1, top:"5dp"
		});
		
		var image2 = Ti.UI.createImageView({
			height: "17dp", width: "17dp", image: "/system/icones/user-group.png",
			left: "5dp", 
		});
		
		image1.add(image2);
    
		var atracao = Ti.UI.createTextField({
			hintText:"Atração",
			paddingLeft: "15dp",
			backgroundColor: "#e5e5e5", 
		});
				
		atracao.applyProperties(param);
		atracao.setRight('35dp');
		atracao.setLeft('28dp');

		
	view1.add(image1);
	view1.add(atracao);
	
		
	var view2 = Ti.UI.createView({
		height: "30dp", top: "10dp"
	});
	
		var estilo = Ti.UI.createTextField({
			backgroundColor: "#e5e5e5",
			paddingLeft: "15dp",
			hintText : 'Estilo'
		});
		
		estilo.applyProperties(param);
		estilo.setRight('35dp');
		estilo.setLeft('28dp');
		
		var view3 = Ti.UI.createView({
			right: "0dp", width: "30dp", height: "30dp", top:"5dp",
			backgroundColor: "#be0d4f"
		});
		
		var image3 = Ti.UI.createImageView({
			width: "17dp", height: "17dp", image:"/system/icones/arrow-down.png"
		});
		
		view3.add(image3);
		
		view2.add(estilo);
		view2.add(view3);
		
	idView.add(view1);
	idView.add(view2);
	
	this.view = idView;
	this.getValues = function(){
		var data = {'atracao': atracao.value, 'estilo': estilo.value };
		return data;
	};
};

function Ingresso(param){
	var idView = Ti.UI.createView({
		left:"20dp", right:"20dp", height:"80dp", layout:"vertical"
	});
	
	var view1 = Ti.UI.createView({
		height: "30dp"
	});
		var image1 = Ti.UI.createImageView({
			height: "30dp", width: "35dp", image: "/system/background/itens-eventos.png",
			left: "0dp", zIndex: 1, top:"5dp"
		});
		
		var image2 = Ti.UI.createImageView({
			height: "17dp", width: "17dp", image: "/system/icones/ticket.png",
			left: "5dp", 
		});
		
		image1.add(image2);
    
		var valorField = Ti.UI.createTextField({
			hintText:"Valor",
			paddingLeft: "15dp",
			backgroundColor: "#e5e5e5", 
		});
				
		valorField.applyProperties(param);
		valorField.setWidth('102dp');
		valorField.setLeft('28dp');

		var tipoField = Ti.UI.createTextField({
			hintText:"Tipo",
			paddingLeft: "15dp",
			backgroundColor: "#e5e5e5", 
		});
				
		tipoField.applyProperties(param);
		tipoField.setWidth('107dp');
		tipoField.setLeft('138dp');
		
	view1.add(image1);
	view1.add(valorField);
	view1.add(tipoField);
	
		
	var view2 = Ti.UI.createView({
		height: "30dp", top: "10dp"
	});
	
		var descricao = Ti.UI.createTextField({
			backgroundColor: "#e5e5e5",
			paddingLeft: "15dp",
			hintText : 'Descrição'
		});
		
		descricao.applyProperties(param);
		descricao.setRight('35dp');
		descricao.setLeft('28dp');
		
		var view3 = Ti.UI.createView({
			right: "0dp", width: "30dp", height: "30dp", top:"5dp",
			backgroundColor: "#be0d4f"
		});
		
		var image3 = Ti.UI.createImageView({
			width: "17dp", height: "17dp", image:"/system/icones/arrow-down.png"
		});
		
		view3.add(image3);
		
		view2.add(descricao);
		view2.add(view3);
		
	idView.add(view1);
	idView.add(view2);
	
	this.view = idView;
	this.getValues = function(){
		var data = {valor: valorField.value, descricao: descricao.value, tipo: tipoField.value };
		return data;
	};
};


exports.Atracao = Atracao;
exports.Ingresso = Ingresso;
