$(document).ready(function(e) {
	$('.main_slide_wrap .main_slide').slick({
		infinite: true,
		speed: 300,
		fade: true,
		arrows: true,
		autoplay: true,
		pauseOnHover : false, //마우스 호버시슬라이드 멈추는거
		autoplaySpeed: 3000,
		cssEase: 'linear',
		prevArrow: $('.arrow_wrap .prev'),
		nextArrow: $('.arrow_wrap .next'),
		dotsClass: 'dots_custom',
		dots: true
	});

	$('.play').click(function(){
		$('.main_slide_wrap .main_slide').slick('slickPlay');
	});
	 
	$('.stop').click(function(){
		$('.main_slide_wrap .main_slide').slick('slickPause');
	});
	

	$('.sub2_slide .slide').slick({
		infinite: true,
		speed: 300,
		fade: true,
		arrows: true,
		autoplay: true,
		pauseOnHover : false,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		dots: true
	});
	// $('.main_section .slide_banner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	if( nextSlide ){
	// 		$('.main_section .slide_banner .slide_dot .circle').removeClass("active");
	// 		$('.main_section .slide_banner .slide_dot .circle2').addClass("active");
	// 	}else{
	// 		$('.main_section .slide_banner .slide_dot .circle').addClass("active");
	// 		$('.main_section .slide_banner .slide_dot .circle2').removeClass("active");
	// 	}
	// 	//$('.main_section .slide_banner .slide_dot span').eq(nextSlide).addClass("active");
	// });
});

