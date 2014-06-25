$(document).ready(function(){
	/*menu active*/
	$('.navbar-toggle').on('click',function(){
		$(this).toggleClass('in');
		$('.collapse').toggleClass('in');
		$('body').toggleClass('overlay');
	});
});
