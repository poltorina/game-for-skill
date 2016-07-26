window.onload = zoomDiv;

window.addEventListener('resize', function(){
	return zoomDiv();
}, true);

function zoomDiv(){

	var wrapWidth = document.getElementsByTagName('div')[0].clientWidth - 10;
	var wrapHeight = document.getElementsByTagName('div')[0].clientHeight - 20;
	var game = document.getElementById('scalable');

	var zoom = wrapWidth / 1518;
	var maxW = 1518 * zoom - 1;
	var maxH = 1143 * zoom + 1;
	var scale = 'scale(' + zoom + ')';

	if (wrapHeight < maxH) {
		var correctHeight = wrapHeight / 1143;
		var maxH = 1143 * correctHeight + 1;
		var maxW = 1518 * correctHeight;
		var scale = 'scale(' + correctHeight + ')';
	}

	function setVendor(element, property, value) {
	console.log(maxH, maxW);

		element.style["webkit" + property] = value;
		element.style["moz" + property] = value;
		element.style["ms" + property] = value;
		element.style["o" + property] = value;
		element.style[property] = value;
		element.style.top = 'calc(50% - ' + maxH / 2 + 'px)';
		element.style.left = 'calc(50% - ' + maxW / 2 + 'px)';
	}
	setVendor(game, 'Transform', scale)

}