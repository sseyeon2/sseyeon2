$(document).ready(function(e) {
	$('.sup-cont .slide-box-wrap ul').slick({
		infinite: true,
		speed: 300,
		fade: true,
		arrows: false,
		autoplay: true,
		pauseOnHover : false, //마우스 호버시슬라이드 멈추는거
		autoplaySpeed: 3000,
		cssEase: 'linear',
		dotClass: 'btn-dot',
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

