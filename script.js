function zoomDiv(){

	var wrapWidth = $('.wrapper').width();
	var wrapHeight = $('.wrapper').height();
	var zoom = wrapWidth / 1518;
	var maxW = 1518 * zoom - 1;
	var maxH = 1143 * zoom + 1;

		$('.game').css({
			'transform': 'scale(' + zoom + ')',
			'-webkit-transform': 'scale(' + zoom + ')',
			'-moz-transform': 'scale(' + zoom + ')',
			'-ms-transform': 'scale(' + zoom + ')',
			'top': 'calc(50% - ' + maxH / 2 + 'px)',
			'left': 'calc(50% - ' + maxW / 2 + 'px)'
		});

	if (wrapHeight < maxH) {
		var correctHeight = wrapHeight / 1143;
		var maxH = 1143 * correctHeight + 1;
		var maxW = 1518 * correctHeight;
		$('.game').css({
			'transform': 'scale(' + correctHeight + ')',
			'-webkit-transform': 'scale(' + correctHeight + ')',
			'-moz-transform': 'scale(' + correctHeight + ')',
			'-ms-transform': 'scale(' + correctHeight + ')',
			'top': 'calc(50% - ' + maxH / 2 + 'px)',
			'left': 'calc(50% - ' + maxW / 2 + 'px)'
		});
	}
}

$(window).resize(function(){
	return zoomDiv();
})

$(document).ready(function() {
	return zoomDiv();
});