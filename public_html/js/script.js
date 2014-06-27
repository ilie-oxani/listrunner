$(document).ready(function(){
	/*menu active*/
	$('.navbar-toggle').on('click',function(){
		$(this).toggleClass('in');
		$('.collapse').toggleClass('in');
		$('body').toggleClass('overlay');
	});

	$('.more-link').on('click',function(){
		$(this).toggleClass('active');
		$footerMore = $('.footer-more');
		$footerMore.toggleClass('active');
		$('body').toggleClass('overlay');
	});

	$('body.overlay:after').on('click',function(event){
		console.log(event);
		$('.more-link,.footer-more').removeClass('active');
		$('body').removeClass('overlay');
	});

	$('.get-started-btn').on('click',function(){
		$('.popup-block .get-started').removeClass('hide');
		$('.popup-container').toggleClass('active');
		setTimeout(function(){
			$('.popup-block').toggleClass('transition');
		},100);
		popPosition();
	});

	$('.btn-login').on('click',function(){
		$('.popup-block .sing-up').removeClass('hide');
		$('.popup-container').toggleClass('active');
		setTimeout(function(){
			$('.popup-block').toggleClass('transition');
		},100);
		popPosition();
	});

	$('.close-btn').click(function(){
		$('.popup-container').removeClass('active');
		$('.popup-block').removeClass('transition');
		$('.popup-block .sing-up').addClass('hide');
		$('.popup-block .get-started').addClass('hide');
	});

	/*fancybox*/

	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',
			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			},
			padding: 60,
	});

	/*sing-up popap*/
	function popPosition(){
		$win = $(window);
		$popapBlock = $('.popup-container .popup-block');
		$body = $('body');
		$popapBlock.css({"margin-bottom" : - Math.floor($popapBlock.outerHeight()/2)});
	}	

	$(window).resize(function(){ popPosition();});
});
