var args = arguments[0] || {};

function back(){
	Alloy.Globals.closeWindow();
}

function switchButton(e){
	if(e.source.btn == 'list'){
		$._list.opacity = '1.0';
		$._info.opacity = '0.5';
		$._shared.opacity = '0.5';
		$.scrollview.scrollToView($._scrollLista);
	}else{
		if(e.source.btn == 'info'){
			$._list.opacity = '0.5';
			$._info.opacity = '1.0';
			$._shared.opacity = '0.5';
			$.scrollview.scrollToView($._scrollInfo);
		}else{
			$._list.opacity = '0.5';
			$._info.opacity = '0.5';
			$._shared.opacity = '1.0';
		}
	}	
}

