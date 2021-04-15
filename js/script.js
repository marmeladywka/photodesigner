$(document).ready(function(){
	$('.portfolio__slider').slick({
		slidesToShow:2,
		rows:2,
		slidesToScroll:2,
		speed:1000,
		easing:'ease',
		infinite:false,
		prevArrow: $('.portfolio__prev'),
		nextArrow: $('.portfolio__next'),
	});
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');		
	});
	$('.header__link').click(function () {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
});
	
});