const onePxSizeDom = document.getElementById('onePxSizeDom');
const twoPxSizeDom = document.getElementById('twoPxSizeDom');
const threePxSizeDom = document.getElementById('threePxSizeDom');
const fourthPxSizeDom = document.getElementById('fourthPxSizeDom');
onePxSizeDom.onclick = onePixelSize;
twoPxSizeDom.onclick = twoPixelSize;
threePxSizeDom.onclick = threePixelSize;
fourthPxSizeDom.onclick = fourthPixelSize;


function onePixelSize() {
	toolWidth = canvasSize * 1;
	onePxSizeDom.style.color = "#ffffff";
	twoPxSizeDom.style.color = "#839192";
	threePxSizeDom.style.color = "#839192";
	fourthPxSizeDom.style.color = "#839192";
	console.log('onePixelSize has completed the task')
	closeUnclosedMenu() 
}

function twoPixelSize() {
	toolWidth = canvasSize * 2;
	onePxSizeDom.style.color = "#839192";
	twoPxSizeDom.style.color = "#ffffff";
	threePxSizeDom.style.color = "#839192";
	fourthPxSizeDom.style.color = "#839192";
	console.log('twoPixelSize has completed the task')
	closeUnclosedMenu()  
}

function threePixelSize() {
	toolWidth = canvasSize * 3;
	onePxSizeDom.style.color = "#839192";
	twoPxSizeDom.style.color = "#839192";
	threePxSizeDom.style.color = "#ffffff";
	fourthPxSizeDom.style.color = "#839192";
	console.log('threePixelSize has completed the task')
	closeUnclosedMenu()  
}

function fourthPixelSize() {
	toolWidth = canvasSize * 4;
	onePxSizeDom.style.color = "#839192";
	twoPxSizeDom.style.color = "#839192";
	threePxSizeDom.style.color = "#839192";
	fourthPxSizeDom.style.color = "#ffffff";
	console.log('fourthPixelSize has completed the task')
	closeAllOther() 
}