const thirtyTwoCanvasDom = document.getElementById('thirtyTwoCanvasDom');
const sixtyFourCanvasDom = document.getElementById('sixtyFourCanvasDom');
const hundredAndTwentyEightCanvasDom = document.getElementById('hundredAndTwentyEightCanvasDom');
thirtyTwoCanvasDom.onclick = thirtyTwoCanvas;
sixtyFourCanvasDom.onclick = sixtyFourCanvas;
hundredAndTwentyEightCanvasDom.onclick = hundredAndTwentyEightCanvas;


function thirtyTwoCanvas() {
	canvasSize = 32;
	context.clearRect(0, 0, canvas.width, canvas.height);
	toolWidth = canvasSize * 1;
	thirtyTwoCanvasDom.style.color = "#ffffff";
	sixtyFourCanvasDom.style.color = "#839192";
	hundredAndTwentyEightCanvasDom.style.color = "#839192";		
	closeUnclosedMenu()  
}

function sixtyFourCanvas() {
	canvasSize = 16;
	context.clearRect(0, 0, canvas.width, canvas.height);
	toolWidth = canvasSize * 1;
	thirtyTwoCanvasDom.style.color = "#839192";
	sixtyFourCanvasDom.style.color = "#ffffff";
	hundredAndTwentyEightCanvasDom.style.color = "#839192";		
	closeUnclosedMenu()  
}

function hundredAndTwentyEightCanvas() {
	canvasSize = 8;
	context.clearRect(0, 0, canvas.width, canvas.height);
	toolWidth = canvasSize * 1;
	thirtyTwoCanvasDom.style.color = "#839192";
	sixtyFourCanvasDom.style.color = "#839192";
	hundredAndTwentyEightCanvasDom.style.color = "#ffffff";		
	closeUnclosedMenu()  
}