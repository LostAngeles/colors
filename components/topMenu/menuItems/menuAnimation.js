const fullPreviewDom = document.getElementById('fullPreviewDom');
const deleteFrameDom = document.getElementById('deleteFrameDom');
const copyFrameDom = document.getElementById('copyFrameDom');
fullPreviewDom.onclick = fullPreview;

function fullPreview() {
	closeUnclosedMenu() 
	document.getElementById('previewWindow').requestFullscreen();
	console.log('fullPreview has completed the task')
}