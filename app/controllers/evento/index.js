var args = arguments[0] || {};

function back(){
	Alloy.Globals.closeContent();
}

function showPicker(){
	$.datePickerView.animate(slide_out);
};

function confirmPicker(){	
	$.datePickerView.animate(slide_in);
}

function cancelPicker(){
	$.datePickerView.animate(slide_in);
}

var slide_in =  Titanium.UI.createAnimation({top:0,  duration: 500});

var slide_out =  Titanium.UI.createAnimation({top:-258,  duration: 500});

$.praia.addEventListener("click", function(e){
	
});
