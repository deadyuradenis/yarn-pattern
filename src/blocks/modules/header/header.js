function headerFixedToggle() {
	var header = $('.jsHeader'),
		headerSourceBottom = $('.jsHeader').outerHeight();
	if (header.hasClass('header--fixed') && window.pageYOffset < headerSourceBottom) {
		header.removeClass('header--fixed');
	} else if (window.pageYOffset > headerSourceBottom) {
		header.addClass('header--fixed');

		if ($('.jsHeaderBottom').hasClass('is-active')) {
			$('.jsHeaderBottom').removeClass('is-active')
		}
	}


}


$(document).ready(function(){
	headerFixedToggle();
})

$(window).on('scroll', function() {
    headerFixedToggle();
});


