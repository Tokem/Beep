var args = arguments[0] || {};

function onclick() {
	Alloy.Globals.openWindow({
		name : "main/detail"
	});
};

//Click do menu
function openMenu() {
	Alloy.Globals.openMenu();
};

function eventoDblClick() {
	Ti.API.log('dbl Click');
}

function topTouchStart(e) {
	e.source.backgroundColor = "#dadada";

	if (e.source.icon != activeMenuTop.icon) {
		activeMenuTop.children[0].setImage("/system/icones/" + activeMenuTop.icon + "_inactive.png");
		e.source.children[0].setImage("/system/icones/" + e.source.icon + ".png");
		activeMenuTop = e.source;
	}
}

function switchButton(e){
	if(e.source.btn == 'geral'){
		$._geral.opacity = '1.0';
		$._calendar.opacity = '0.5';
		$._time.opacity = '0.5';
	}else{
		if(e.source.btn == 'calendar'){
			$._geral.opacity = '0.5';
			$._calendar.opacity = '1.0';
			$._time.opacity = '0.5';
		}else{
			$._geral.opacity = '0.5';
			$._calendar.opacity = '0.5';
			$._time.opacity = '1.0';
		}
	}	
}

function readQrcode() {
		alert("Read a QRCODE");
/*	Titanium.Media.showCamera({
		success : function(event) {
			// called when media returned from the camera
			Ti.API.debug('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var imageView = Ti.UI.createImageView({
					width : win.width,
					height : win.height,
					image : event.media
				});
				win.add(imageView);
			} else {
				alert("got the wrong type back =" + event.mediaType);
			}
		},
		cancel : function() {
			// called when user cancels taking a picture
		},
		error : function(error) {
			// called when there's an error
			var a = Titanium.UI.createAlertDialog({
				title : 'Camera'
			});
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Please run this test on device');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			a.show();
		},
		saveToPhotoGallery : true,
		// allowEditing and mediaTypes are iOS-only settings
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
	});*/
}
