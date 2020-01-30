let isDrawing;
let currentTool;
let canvasSize = 32;
let firstColor = '#EC12BA';
let secondColor = '#5B2C6F';
let color = firstColor;
let canvasX;
let canvasY;
let toolWidth = canvasSize * 1;
let coordStartStrokeFirst;
let coordStartStrokeSecond;
let coordEndStrokeFirst;
let coordEndStrokeSecond;
let counterCoordsOfStroke = 0;
let fps = 1;
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.onmouseover = closeUnclosedMenu;
canvas.onclick = closeUnclosedMenu;

let thePencilTool = document.getElementById('thePencilTool');
thePencilTool.onclick = pencil;
let thePaintBucketTool = document.getElementById('thePaintBucketTool');
thePaintBucketTool.onclick = bucket;
let theStrokeTool = document.getElementById('theStrokeTool');
theStrokeTool.onclick = stroke;
let theEraseTool = document.getElementById('theEraseTool');
theEraseTool.onclick = eraseIt;
let theColorPickerTool = document.getElementById('theColorPickerTool');
theColorPickerTool.onclick = pickerTool;
let theAddAnimationTool = document.getElementById('theAddAnimationTool');
theAddAnimationTool.onclick = startAnimation;

let setFirstColorDom = document.getElementById('setFirstColorDom');
let setSecondColorDom = document.getElementById('setSecondColorDom');
let pickFirstColorDom = document.getElementById('pickFirstColorDom');
let pickSecondColorDom = document.getElementById('pickSecondColorDom');
setFirstColorDom.onclick = setFirstColor;
setSecondColorDom.onclick = setSecondColor;
pickFirstColorDom.onclick = pickFirstColor;
pickSecondColorDom.onclick = pickSecondColor;


function fillAll() {
	context.fillStyle = color;	
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function changeTool() { 
	if ((currentTool === 1) || (currentTool === 3)) {     	
		canvas.onmousedown = startDrawing;
		canvas.onmouseup = stopDrawing;
		canvas.onmouseout = stopDrawing;
		canvas.onmousemove = draw;
	}
	if (currentTool === 2) { 
		canvas.onmousedown = fillAll;
	} 
	if (currentTool === 4) { 
		canvas.onmousedown = getColor;
		canvas.onmouseup = null;
		canvas.onmouseout = null;
		canvas.onmousemove = null;
	}
	if (currentTool === 5) {
		canvas.onmousedown = startDrawing;    	
	}     
}

function startDrawing(e) {  
	console.log(color)  
	canvasX = Math.floor(e.offsetX/canvasSize)*canvasSize;
	canvasY = Math.floor(e.offsetY/canvasSize)*canvasSize;
	if (currentTool === 1) {
		context.strokeStyle = color;
		context.fillStyle = color;
		context.fillRect(canvasX, canvasY, toolWidth, toolWidth);			
	}
	if (currentTool === 3) {
		context.strokeStyle = '#ffffff'; 
		context.fillStyle = '#ffffff';
		context.fillRect(canvasX, canvasY, toolWidth, toolWidth);		
	} 
	if (currentTool === 5) {
		context.strokeStyle = color;
		context.fillStyle = color;
		counterCoordsOfStroke += 1;
		console.log(counterCoordsOfStroke)
		if (counterCoordsOfStroke === 1) {coordStartStrokeFirst = canvasX}
		if (counterCoordsOfStroke === 1) {coordStartStrokeSecond = canvasY}
		if (counterCoordsOfStroke === 2) {coordEndStrokeFirst = canvasX}
		if (counterCoordsOfStroke === 2) {coordEndStrokeSecond = canvasY}
		if (counterCoordsOfStroke === 2) {
		context.beginPath();
		context.lineWidth = toolWidth;						
		context.moveTo(coordStartStrokeFirst, coordStartStrokeSecond);
		context.lineTo(coordEndStrokeFirst, coordEndStrokeSecond);
		context.stroke();
		}
		if (counterCoordsOfStroke === 2){counterCoordsOfStroke = 0};
			return;		
	} 	  
	isDrawing = true;	
	context.beginPath();
	context.moveTo(canvasX, canvasY);
}

function stopDrawing() {
	isDrawing = false;
}

function draw(e) {	
	canvasX = Math.floor(e.offsetX/canvasSize)*canvasSize;
	canvasY = Math.floor(e.offsetY/canvasSize)*canvasSize;
	if (isDrawing === true) {				
		context.fillRect(canvasX, canvasY, toolWidth, toolWidth);		
	}
}

function getColor(e) {	
	x = e.pageX - canvas.offsetLeft;
	y = e.pageY - canvas.offsetTop;
	context.getImageData(x, y, 1, 1);    
	const temp = `rgba(${context.getImageData(x, y, 1, 1).data})`;    
	color = temp;
}

function bucket() {
	lightCurrentTool(thePaintBucketTool)
	canvas.style.cursor = "url('components/canvas/images/bucket.png'), auto";
	currentTool = 2;
	changeTool();	
}
function pencil() {
	lightCurrentTool(thePencilTool)
	canvas.style.cursor = "url('components/canvas/images/pencil.png'), auto";
	currentTool = 1;
	changeTool();	
}

function eraseIt() {
	lightCurrentTool(theEraseTool)
	canvas.style.cursor = "url('components/canvas/images/erase.png'), auto";
	currentTool = 3;
	changeTool();	
}

function pickerTool() {
	lightCurrentTool(theColorPickerTool)
	currentTool = 4;
	changeTool();
	canvas.style.cursor = "url('components/canvas/images/eye-dropper.png'), auto";   
}

function stroke() {
	lightCurrentTool(theStrokeTool)
	canvas.style.cursor = "url('components/canvas/images/pencil.png'), auto";
	currentTool = 5;
	changeTool();
}

document.getElementById('firstColor').onchange = changeFirstColor;
document.getElementById('secondColor').onchange = changeSecondColor;

function setFirstColor() {
	document.getElementById('firstColor').click();								
}

function setSecondColor() {
	document.getElementById('secondColor').click();								
}


function changeFirstColor() {				
	firstColor = this.value;
	document.getElementById('pickFirstColorDom').click();	
}

function changeSecondColor() {					
	secondColor = this.value;
	document.getElementById('pickSecondColorDom').click();	
}

function pickFirstColor() {
	color = firstColor;
	document.getElementById('pickFirstColorDom').style.color = '#ffffff';
	document.getElementById('pickSecondColorDom').style.color = '#839192';
}

function pickSecondColor() {
	color = secondColor;
	document.getElementById('pickFirstColorDom').style.color = '#839192';
	document.getElementById('pickSecondColorDom').style.color = '#ffffff';
}



let payne = 0;
let experimentArray = [];
let activeFrame;
let activeFrameSource;
let lastSelected;			

function selectFrame(id) {
			if (lastSelected) {lastSelected.classList.remove("selectedFrame")};				
			activeFrame = document.getElementById(id);
			lastSelected = activeFrame;
			activeFrame.classList.add("selectedFrame");			
			activeFrameSource = activeFrame.src;
}
deleteFrameDom.onclick = deleteFrame;
copyFrameDom.onclick = copyFrame;

		function deleteFrame() {
			closeUnclosedMenu()  
			for (let i = 0; i < experimentArray.length; i +=1) {
				if (experimentArray[i] == activeFrameSource) {					
					activeFrame.src = 'https://sib3ri4nhusky.github.io/favicon.png';
					//clearInterval(creative);
					experimentArray.splice(i, 1)
					activeFrame.classList.remove("selectedFrame");					
					activeFrame.style.display = 'none';
					startTheProcessOfAnimation()
				}
			}			
		}

		function copyFrame() {
			closeUnclosedMenu()  
			experimentArray.push(activeFrameSource);		
			let frame = document.createElement('img');	
			frame.id = 'id-' + payne+1;		
			frame.className = "animationInList";
			frame.onclick = () => selectFrame(frame.id);
			frame.src = activeFrameSource;	
			document.getElementById('theSlides').append(frame);	
			clearCanvas()	
			payne++;	
			startTheProcessOfAnimation()
		}


		function startAnimation() {
			document.getElementById('rangeFpsContainer').style.height = "20px";
			experimentArray.push(canvas.toDataURL());		
			let frame = document.createElement('img');	
			frame.id = 'id-' + payne;		
			frame.className = "animationInList";
			frame.onclick = () => selectFrame(frame.id);
			frame.src = canvas.toDataURL();	
			document.getElementById('theSlides').append(frame);	
			clearCanvas()	
			payne++;	
			startTheProcessOfAnimation()
		}

		let i = 0
		function startTheProcessOfAnimation() {
			setInterval(function() {
			let oldFps = fps;
			fps = document.getElementById('rangeFps').value;
			if (oldFps !== fps) {startTheProcessOfAnimation()}						
				if (!experimentArray.length) {
					document.getElementById('previewWindow').src = 'https://sib3ri4nhusky.github.io/favicon.png';
					return
				}		
				if (experimentArray[i]) {
					document.getElementById('previewWindow').src = experimentArray[i]
					i += 1;
				};						
				if (i === experimentArray.length) {i = 0}
			}, 1000/fps);	
		}



