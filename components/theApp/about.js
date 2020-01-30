let isAbout = false;
const aboutAuthorDom = document.getElementById('aboutAuthorDom');
aboutAuthorDom.onclick = () => window.open('http://github.com/LostAngeles','mywindow');
const aboutCreativeDom = document.getElementById('aboutCreativeDom');
aboutCreativeDom.onclick = aboutApp;
const aboutAppExit = document.getElementById('aboutAppExit');
aboutAppExit.onclick = aboutApp;

function aboutApp() {
	closeUnclosedMenu()
	isAbout = !isAbout;
	if (isAbout) {
		document.body.style.backgroundImage = 'url(components/intro/horses.jpg)';		
		document.getElementById('interface').style.height = '0px';
		document.getElementById('aboutApp').style.display = "block";
		setTimeout(function () {
			document.getElementById('aboutApp').style.height = "600px";
			document.getElementById('aboutApp').style.opacity = "1";
		}, 500)
	}
	if (!isAbout) {
		document.body.style.backgroundImage = 'url(components/intro/horses.jpg)';
		document.getElementById('interface').style.height = "600px";
		document.getElementById('aboutApp').style.opacity = "0";	
		console.log("sony")
		setTimeout(function () {
			document.getElementById('aboutApp').style.display = "none";			
		}, 500)
	}
	
}