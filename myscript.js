/*preloader*/
$(document).ready(function($) {
	var Body = $('body');
	Body.addClass('preloader-site');
});  

$(window).load(function() {
	$('.preloader-wrapper').fadeOut();
	$('body').removeClass('preloader-site');
});

/*parallax scrolling*/
$(window).scroll(function(){

	let scrollTop = $(this).scrollTop();

	console.log(scrollTop);

	$(".hero").css("background-position-y", -(scrollTop*2) + "px");
});
