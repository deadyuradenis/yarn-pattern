import "./import/modules";
import $ from 'jquery';
import Modal from 'bootstrap/js/dist/modal';

require('@fancyapps/fancybox');

$('.jsScrollButton').on('click', function (e) {
	e.preventDefault();
	var getvalue = $(this).attr('href');
	$('html, body').stop().animate({scrollTop: $(getvalue).offset().top}, 500);
});
