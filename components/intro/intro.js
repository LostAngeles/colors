const leftLA = document.getElementById('leftLA');
leftLA.onclick = () => window.open('http://github.com/LostAngeles','mywindow');
const rightLA = document.getElementById('rightLA');
rightLA.onclick = () => window.open('http://github.com/LostAngeles','mywindow');

function blurForIntro() {
	document.body.style.backgroundImage = 'url(components/intro/horses.jpg)';	
}
setTimeout(blurForIntro, 1000);
