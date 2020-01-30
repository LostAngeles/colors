const toGifDom = document.getElementById('toGifDom');
const toPngDom = document.getElementById('toPngDom');
toGifDom.onclick = exportToGif;
toPngDom.onclick = exportToPng;

function exportToPng(arg) {
	closeUnclosedMenu() 	
	let lnk = document.createElement('a'), e;
	lnk.download = "file.png";
	lnk.href = canvas.toDataURL("image/png;base64");
	if (document.createEvent) {
		e = document.createEvent("MouseEvents");
		e.initMouseEvent("click", true, true, window,
			0, 0, 0, 0, 0, false, false, false,
			false, 0, null);

		lnk.dispatchEvent(e);
	} else if (lnk.fireEvent) {
		lnk.fireEvent("onclick");
	}
}

function exportToGif() {
	closeUnclosedMenu() 	
	gifshot.createGIF({
		frameDuration: 10/(fps*10),
		'images': [...experimentArray]
	},function(obj) {
		if(!obj.error) {
			var image = obj.image,
			animatedImage = document.createElement('img');
			animatedImage.src = image;
			//document.body.appendChild(animatedImage);
			//download(animatedImage.gif)
			var templink = document.createElement("a"), e;
			templink.download='animatedImage.gif';
			templink.href= animatedImage.src;
			templink.click();
		}
	});
}