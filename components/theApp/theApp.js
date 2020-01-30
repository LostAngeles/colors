let isCanvasReady = false;
const fakeCanvas = document.getElementById('fake-canvas');
const launchTheAppLeftDom = document.getElementById('launchTheAppLeftDom');
const launchTheAppRightDom = document.getElementById('launchTheAppRightDom');
fakeCanvas.onclick =superSixOne;
launchTheAppLeftDom.onclick = launchTheApp;
launchTheAppRightDom.onclick = launchTheApp;

function launchTheApp() {
	document.body.style.backgroundImage = 'url(components/intro/horses.jpg)';
	function disableIntro() {
		document.getElementById('intro-right-side').style.width = 0;
		document.getElementById('intro-left-side').style.width = 0;
	}
	function turnOnApp() {
		document.getElementById('intro').style.display = 'none';
		document.getElementById('creative-app').style.display = 'block';
		document.getElementById('interface').style.display = 'flex';
	}
	function showApp() {		
		document.getElementById('creative-app').style.height = '600px';
		document.getElementById('interface').style.height = '600px';
		document.getElementById('creative-app-tools').style.height = '238px';
		document.getElementById('creative-app-anim').style.height = '350px'; //42 //242
		document.getElementById('fake-canvas').style.height = '512px';
		document.getElementById('menu-bar').style.height = '30px';
		document.getElementById('color-selection').style.height = '100px';
	}
	function addShadow() {
		document.getElementById('creative-app-tools').classList.add("shadow");
		document.getElementById('fake-canvas').classList.add("shadow");
		document.getElementById('color-selection').classList.add("shadow");
		document.getElementById('creative-app-anim').classList.add("shadow");
		document.getElementById('animation-preview').classList.add("shadow");
		document.getElementById('canvas').classList.add("shadow");
		document.getElementById('menu-bar').classList.add("shadow");
		document.getElementById('keyboard-modal').classList.add("shadow");
	}
	disableIntro();
	//setTimeout(disableIntro, 500);
	setTimeout(turnOnApp, 300);
	setTimeout(showApp, 500);
	setTimeout(addShadow, 600);
}

function superSixOne() {	
	function firstStep() {			
		document.getElementById('fake-canvas').style.borderRadius = '50px';		
		document.getElementById('fake-canvas').style.height = '100px';
		document.getElementById('fake-canvas').style.width = '100px';			
		document.getElementById('fake-canvas').style.marginTop = '200px';
	}
	function secondStep() {
		document.getElementById('fake-canvas').style.marginTop = '0px';
		document.getElementById('fake-canvas').style.backgroundColor = 'white';
		document.getElementById('fake-canvas').style.height = '512px';
		document.getElementById('fake-canvas').style.width = '512px';
		document.getElementById('fake-canvas').style.borderRadius = '5px';		
		document.getElementById('canvas-hello').innerHTML = 'paint something';			
	}
	function hideCanvasHello() {
		document.getElementById('canvas-hello').style.opacity = '0';
	}
	function turnOnRealCanvas() {
		document.getElementById('fake-canvas').style.display = 'none';
		document.getElementById('canvas').style.display = 'block';
		isCanvasReady = true;
	}
	firstStep()
	setTimeout(secondStep, 1000)
	setTimeout(hideCanvasHello, 2000)
	setTimeout(turnOnRealCanvas, 3000)
}
