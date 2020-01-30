const saveSessionDom = document.getElementById('saveSession');
const loadSessionDom = document.getElementById('loadSession');
const clearCanvasDom = document.getElementById('clearCanvas');
saveSessionDom.onclick = saveSession;
loadSessionDom.onclick = loadSession;
clearCanvasDom.onclick = clearCanvas;

function saveSession() {
	closeUnclosedMenu() 
	console.log('not ready yet')
}

function loadSession() {
	closeUnclosedMenu() 
	console.log('not ready yet')
}

function clearCanvas() {
	closeUnclosedMenu() 
	context.clearRect(0, 0, canvas.width, canvas.height);
}