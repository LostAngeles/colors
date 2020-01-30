//tools
const expandTitleAppTools = document.getElementById('creative-app-tools-expand-title');
const collapseTitleAppTools = document.getElementById('creative-app-tools-collapse-title');
const creativeAppTools = document.getElementById('creative-app-tools');
let creativeAppToolsOpen = false;

const colorSectionCollapseDom = document.getElementById('colorSectionCollapseDom');
colorSectionCollapseDom.onclick = colorSectionCollapse;
const creativeAppToolsCollapseDom = document.getElementById('creativeAppToolsCollapseDom');
creativeAppToolsCollapseDom.onclick = creativeAppToolsCollapse;
const animationPreviewCollapseDom = document.getElementById('animationPreviewCollapseDom');
animationPreviewCollapseDom.onclick = animationPreviewCollapse;
const animationCollapseDom = document.getElementById('animationCollapseDom');
animationCollapseDom.onclick = animationCollapse;


function creativeAppToolsCollapse() {
	creativeAppToolsOpen = !creativeAppToolsOpen;

	function hideAppToolsCollpaseTtile() {
		expandTitleAppTools.style.display = 'block';
		collapseTitleAppTools.style.display = 'none';
		setTimeout(function () {
			expandTitleAppTools.style.opacity = '1';
		}, 200)				
	}

	function hideAppToolsExpandTtile() {
		collapseTitleAppTools.style.display = 'block';
		expandTitleAppTools.style.display = 'none';		
		setTimeout(function () {
			collapseTitleAppTools.style.opacity = '1';
		}, 200)
	}

	if (creativeAppToolsOpen) {
		creativeAppTools.style.height = '42px';		
		collapseTitleAppTools.style.opacity = '0';		
		setTimeout(hideAppToolsCollpaseTtile, 300)
	}
	else {
		creativeAppTools.style.height = '238px';
		expandTitleAppTools.style.opacity = '0';		
		setTimeout(hideAppToolsExpandTtile, 300)
	}
}

// color section

const colorSectionExpandTitle = document.getElementById('color-section-expand-title');
const colorSectionCollapseTitle = document.getElementById('color-section-collapse-title'); 
const colorSelection = document.getElementById('color-selection'); 
let colorToolsOpen = false;

function colorSectionCollapse() {
	colorToolsOpen = !colorToolsOpen;

	function hideColorCollpaseTtile() { 
		colorSectionExpandTitle.style.display = 'block';
		colorSectionCollapseTitle.style.display = 'none';
		setTimeout(function () {
			colorSectionExpandTitle.style.opacity = '1';
		}, 200)				
	}

	function hideColorExpandTtile() {
		colorSectionCollapseTitle.style.display = 'block';
		colorSectionExpandTitle.style.display = 'none';		
		setTimeout(function () {
			colorSectionCollapseTitle.style.opacity = '1';
		}, 200)
	}

	if (colorToolsOpen) {
		colorSelection.style.height = '42px';		
		colorSectionCollapseTitle.style.opacity = '0';		
		setTimeout(hideColorCollpaseTtile, 300)
	}
	else {
		colorSelection.style.height = '100px';
		colorSectionExpandTitle.style.opacity = '0';		
		setTimeout(hideColorExpandTtile, 300)
	}
}

// animation preview

const animationPreviewExpandTitle = document.getElementById('animation-preview-expand-title');  
const animationPreviewCollapseTitle = document.getElementById('animation-preview-collapse-title'); 
const animationPreview = document.getElementById('animation-preview');  
let animationPreviewOpen = false; animationPreviewOpen

function animationPreviewCollapse() {
	animationPreviewOpen = !animationPreviewOpen;

	function hideAnimationPreviewCollpaseTtile() { 
		animationPreviewExpandTitle.style.display = 'block';
		animationPreviewCollapseTitle.style.display = 'none';
		setTimeout(function () {
			animationPreviewExpandTitle.style.opacity = '1';
		}, 200)				
	}

	function hideAnimationPreviewExpandTtile() {
		animationPreviewCollapseTitle.style.display = 'block';
		animationPreviewExpandTitle.style.display = 'none';		
		setTimeout(function () {
			animationPreviewCollapseTitle.style.opacity = '1';
		}, 200)
	}

	if (animationPreviewOpen) {
		animationPreview.style.height = '42px';		
		animationPreviewCollapseTitle.style.opacity = '0';		
		setTimeout(hideAnimationPreviewCollpaseTtile, 300)
	}
	else {
		animationPreview.style.height = '220px';
		animationPreviewExpandTitle.style.opacity = '0';		
		setTimeout(hideAnimationPreviewExpandTtile, 300)
	}
}

// animation 

const animationExpandTitle = document.getElementById('animation-expand-title');   
const animationCollapseTitle = document.getElementById('animation-collapse-title'); 
const creativeAppAnim = document.getElementById('creative-app-anim');  
let animationOpen = false; 

function animationCollapse() {
	animationOpen = !animationOpen;

	function hideAnimationCollpaseTtile() { 
		animationExpandTitle.style.display = 'block';
		animationCollapseTitle.style.display = 'none';
		setTimeout(function () {
			animationExpandTitle.style.opacity = '1';
		}, 200)				
	}

	function hideAnimationExpandTtile() {
		animationCollapseTitle.style.display = 'block';
		animationExpandTitle.style.display = 'none';		
		setTimeout(function () {
			animationCollapseTitle.style.opacity = '1';
		}, 200)
	}

	if (animationOpen) {
		creativeAppAnim.style.height = '42px';		
		animationCollapseTitle.style.opacity = '0';		
		setTimeout(hideAnimationCollpaseTtile, 300)
	}
	else {
		creativeAppAnim.style.height = '330px';
		animationExpandTitle.style.opacity = '0';		
		setTimeout(hideAnimationExpandTtile, 300)
	}
}
