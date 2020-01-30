let creativeMenuOpen = 0; // add
let fileMenuOpen = 0;
let exportMenuOpen = 0;
let toolSizeOpen = 0;
let canvasMenuOpen = 0;
let animationMenuOpen = 0;
let keyboardMenuOpen = 0;

const thecreativeDom = document.getElementById('thecreativeDom');
const fileDom = document.getElementById('fileDom');
const exportDom = document.getElementById('exportDom');
const toolSizeDom = document.getElementById('toolSizeDom');
const canvasDom = document.getElementById('canvasDom');
const animationDom = document.getElementById('animationDom');
const keyboardDom = document.getElementById('keyboardDom');
thecreativeDom.onclick = () => expandMenu('thecreative');
fileDom.onclick = () => expandMenu('file');
exportDom.onclick = () => expandMenu('export');
toolSizeDom.onclick = () => expandMenu('toolSize');
canvasDom.onclick = () => expandMenu('canvas');
animationDom.onclick = () => expandMenu('animation');
keyboardDom.onclick = () => expandMenu('keyboard');

function closeAllOther() {
	document.getElementById('creative-menu').style.height = '0px'; // add
	document.getElementById('creative-menu').style.paddingBottom = '0px'; // add
	document.getElementById('file-menu').style.height = '0px';
	document.getElementById('file-menu').style.paddingBottom = '0px';			
	document.getElementById('export-menu').style.height = '0px';
	document.getElementById('export-menu').style.paddingBottom = '0px';			
	document.getElementById('toolSize').style.height = '0px';
	document.getElementById('toolSize').style.paddingBottom = '0px';			
	document.getElementById('canvas-menu').style.height = '0px';
	document.getElementById('canvas-menu').style.paddingBottom = '0px';			
	document.getElementById('animation-menu').style.height = '0px';
	document.getElementById('animation-menu').style.paddingBottom = '0px';			
	document.getElementById('keyboard-menu').style.height = '0px';
	document.getElementById('keyboard-menu').style.paddingBottom = '0px';		
}

function closeUnclosedMenu() {
	closeAllOther()
	creativeMenuOpen = 0 // add
	fileMenuOpen = 0;
	exportMenuOpen = 0;
	toolSizeOpen = 0;
	canvasMenuOpen = 0;
	animationMenuOpen = 0;
	keyboardMenuOpen = 0;
}

function expandMenu(menuItem) {	
	switch (menuItem) {

		case 'thecreative':
		fileMenuOpen = 0;
		exportMenuOpen = 0;
		toolSizeOpen = 0;
		canvasMenuOpen = 0;	
		animationMenuOpen = 0; 
		keyboardMenuOpen = 0;	
		closeAllOther()		
		if (creativeMenuOpen == 0) {			
			document.getElementById('creative-menu').style.height = '20px';
			document.getElementById('creative-menu').style.paddingBottom = '5px';										
		}
		creativeMenuOpen += 1;			
		if (creativeMenuOpen === 2) {			
			creativeMenuOpen = 0;
			closeAllOther();	
		}			
		break;

		case 'file':
		exportMenuOpen = 0;
		creativeMenuOpen = 0 // add
		toolSizeOpen = 0;
		canvasMenuOpen = 0;	
		animationMenuOpen = 0; 
		keyboardMenuOpen = 0;	
		closeAllOther()		
		if (fileMenuOpen == 0) {			
			document.getElementById('file-menu').style.height = '60px';
			document.getElementById('file-menu').style.paddingBottom = '5px';										
		}
		fileMenuOpen += 1;			
		if (fileMenuOpen === 2) {			
			fileMenuOpen = 0;
			closeAllOther();	
		}			
		break;

		case 'export':				
		fileMenuOpen = 0;
		creativeMenuOpen = 0 // add
		toolSizeOpen = 0;
		canvasMenuOpen = 0;
		animationMenuOpen = 0;
		keyboardMenuOpen = 0;
		closeAllOther()		
		if (exportMenuOpen == 0) {			
			document.getElementById('export-menu').style.height = '40px';
			document.getElementById('export-menu').style.paddingBottom = '5px';											
		}
		exportMenuOpen += 1;			
		if (exportMenuOpen === 2) {			
			exportMenuOpen = 0;
			closeAllOther();	
		}
		break;

		case 'toolSize':
		exportMenuOpen = 0;
		creativeMenuOpen = 0 // add
		fileMenuOpen = 0;
		canvasMenuOpen = 0;
		animationMenuOpen = 0;
		keyboardMenuOpen = 0;
		closeAllOther()		
		if (toolSizeOpen == 0) {			
			document.getElementById('toolSize').style.height = '80px';
			document.getElementById('toolSize').style.paddingBottom = '5px';											
		}
		toolSizeOpen += 1;			
		if (toolSizeOpen === 2) {			
			toolSizeOpen = 0;
			closeAllOther();	
		}
		break;

		case 'canvas':
		exportMenuOpen = 0;
		creativeMenuOpen = 0 // add
		fileMenuOpen = 0;
		toolSizeOpen = 0;
		animationMenuOpen = 0;
		keyboardMenuOpen = 0;
		closeAllOther()		
		if (canvasMenuOpen == 0) {			
			document.getElementById('canvas-menu').style.height = '60px';
			document.getElementById('canvas-menu').style.paddingBottom = '5px';											
		}
		canvasMenuOpen += 1;			
		if (canvasMenuOpen === 2) {			
			canvasMenuOpen = 0;
			closeAllOther();	
		}
		break;

		case 'animation':
		exportMenuOpen = 0;
		creativeMenuOpen = 0 // add
		fileMenuOpen = 0;
		toolSizeOpen = 0;
		canvasMenuOpen = 0;
		keyboardMenuOpen = 0;
		closeAllOther()		
		if (animationMenuOpen == 0) {			
			document.getElementById('animation-menu').style.height = '60px';
			document.getElementById('animation-menu').style.paddingBottom = '5px';											
		}
		animationMenuOpen += 1;			
		if (animationMenuOpen === 2) {			
			animationMenuOpen = 0;
			closeAllOther();	
		}
		break;

		case 'keyboard':
		exportMenuOpen = 0;
		creativeMenuOpen = 0 // add
		fileMenuOpen = 0;
		toolSizeOpen = 0;
		canvasMenuOpen = 0;
		animationMenuOpen = 0;
		closeAllOther()		
		if (keyboardMenuOpen == 0) {			
			document.getElementById('keyboard-menu').style.height = '20px';
			document.getElementById('keyboard-menu').style.paddingBottom = '5px';											
		}
		keyboardMenuOpen += 1;			
		if (keyboardMenuOpen === 2) {			
			keyboardMenuOpen = 0;
			closeAllOther();	
		}
		break;
		default:
		alert('error');
	}
}

