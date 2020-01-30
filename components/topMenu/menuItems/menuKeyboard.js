const allKeyCodes = {
	a: 65,
	b: 66,
	c: 67, 
	d: 68, 
	e: 69,
	f: 70,
	g: 71,
	h: 72,
	i: 73,
	j: 74,
	k: 75,
	i: 76,
	m: 77,
	n: 78,
	o: 79,
	p: 80,
	q: 81,
	r: 82,
	s: 83,
	t: 84,
	u: 85,
	v: 86,
	w: 87,
	x: 88,
	y: 89,
	z: 90
};

const keyboardModal = document.getElementById('keyboard-modal');
const pencilTextArea = document.getElementById('pencilTextArea');
const paintBucketTextArea = document.getElementById('paintBucketTextArea');
const strokeTextArea = document.getElementById('strokeTextArea');
const eraseTextArea = document.getElementById('eraseTextArea');
const startAnimTextArea = document.getElementById('startAnimTextArea');
const colorPickerTextArea = document.getElementById('colorPickerTextArea');
const pNGTextArea = document.getElementById('PNGTextArea');
const gIFTextArea = document.getElementById('GIFTextArea');
const deleteFrameTextArea = document.getElementById('deleteFrameTextArea'); 
const copyFrameTextArea = document.getElementById('copyFrameTextArea');
const firstColorTextArea = document.getElementById('firstColorTextArea');
const secondColorTextArea = document.getElementById('secondColorTextArea');
const uniqueLetters = document.getElementById('uniqueLetters');
const SaveKeyboardModalDom = document.getElementById('SaveKeyboardModalDom');
SaveKeyboardModalDom.onclick = SaveKeyboardModal;
const offKeyboardModalDom = document.getElementById('offKeyboardModalDom');
offKeyboardModalDom.onclick = offKeyboardModal;
const hotkeysDom = document.getElementById('hotkeysDom');
hotkeysDom.onclick = hotkeys;


let incomingValues = [];

function hotkeys() {
	closeUnclosedMenu()  
	isShortcutsOn = false;	

	function showKeyboardModal() {
		keyboardModal.style.height = '512px';
	}

	function enableKeyboardModal() {
		canvas.style.display = 'none';
		fakeCanvas.style.display = 'none'; 
		keyboardModal.style.display = 'block';
		setTimeout(showKeyboardModal, 100)
	}

	if(isCanvasReady) {
		canvas.style.height = '0px';
		setTimeout(enableKeyboardModal, 500)
	}
	if (!isCanvasReady) {
		fakeCanvas.style.height = '0px';
		setTimeout(enableKeyboardModal, 500)
	}
}

function hideKeyboardModal() {
	keyboardModal.style.display = 'none';
	if(isCanvasReady) {
		canvas.style.display = 'block';
		setTimeout(function () {
			canvas.style.height = '512px';
		}, 200)
	}
	if (!isCanvasReady) {		
		fakeCanvas.style.display = 'block';
		setTimeout(function () {
			fakeCanvas.style.height = '512px';
		}, 200)
	}
}
function offKeyboardModal() {
	isShortcutsOn = true;
	keyboardModal.style.height = '0px';	
	setTimeout(hideKeyboardModal, 700)
}

function srtIncomingValues() {
	incomingValues[0] = pencilTextArea.value;	
	incomingValues[1] = paintBucketTextArea.value;
	incomingValues[2] = strokeTextArea.value;
	incomingValues[3] = eraseTextArea.value;
	incomingValues[4] = startAnimTextArea.value;
	incomingValues[5] = colorPickerTextArea.value;
	incomingValues[6] = pNGTextArea.value;
	incomingValues[7] = gIFTextArea.value;
	incomingValues[8] = deleteFrameTextArea.value; 
	incomingValues[9] = copyFrameTextArea.value;
	incomingValues[10] = firstColorTextArea.value;
	incomingValues[11] = secondColorTextArea.value;
}

function findDuplicates() {
	srtIncomingValues()	
	return incomingValues.filter((item, index) => incomingValues.indexOf(item) != index).length;
}

function SaveKeyboardModal() {
	if(!(findDuplicates())) {		
		pencilCode = allKeyCodes[incomingValues[0]];		
		bucketCode = allKeyCodes[incomingValues[1]];
		strokeCode = allKeyCodes[incomingValues[2]];
		eraseCode = allKeyCodes[incomingValues[3]];
		startAnimCode = allKeyCodes[incomingValues[4]];
		exportToPNG = allKeyCodes[incomingValues[5]];
		exportToGIF = allKeyCodes[incomingValues[6]];
		firstColorCode = allKeyCodes[incomingValues[7]];
		deleteFrameCode = allKeyCodes[incomingValues[8]];
		copyFrameCode = allKeyCodes[incomingValues[9]];
		secondColorCode = allKeyCodes[incomingValues[10]];
		colorPickerCode = allKeyCodes[incomingValues[11]];
		alert("OK. SETTINGS SAVED")	
		offKeyboardModal()
	}
	else {
		uniqueLetters.style.color = 'red';
		setTimeout(function () {
			uniqueLetters.style.color = '#839192';
		}, 3000)
	}
}











