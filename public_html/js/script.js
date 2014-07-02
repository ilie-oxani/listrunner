$(document).ready(function(){
	/*video player*/

	$(document).on('click', '[data-video-id]', function(event) {
		event.preventDefault();
		var videoId = $(this).data('video-id');
		var $videoContainer = $('#video_' + videoId);
		$videoContainer.html('');
		$videoContainer.append('<iframe src="//player.vimeo.com/video/' + videoId + '" width="' + $videoContainer.width() + '" height="' + $videoContainer.height() + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		$videoContainer.addClass('on');
	});

	
	function video() {
		var iframe = $('#player1')[0],
	    player = $f(iframe),
	    status = $('.status');

		// When the player is ready, add listeners for pause, finish, and playProgress
		player.addEvent('ready', function() {
		    status.text('ready');
		    
		    player.addEvent('pause', onPause);
		    player.addEvent('finish', onFinish);
		    player.addEvent('playProgress', onPlayProgress);
		});

		player.api('play');
	}

	// Call the API when a button is pressed
	$('button').bind('click', function() {
	    player.api($(this).text().toLowerCase());
	});



	/*Question*/
	( function() {
	    var container = document.querySelector('.questions-list');
	    var msnry = new Masonry( container, {
	      itemSelector: '.col-md-6'
	    });
	  })();
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
