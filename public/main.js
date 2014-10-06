$(document).on('ready', function() {
	smoothScroll(600);
	workBelt();
	workLoad();
});

// smoothScroll is just being defined here, but is being called in the on ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

function workBelt() {

	$('.thumb-unit').click(function() {

		$('.work-belt').css('left', '-100%');
		$('.work-container').show();

	});

	$('.work-return').click(function() {

		$('.work-belt').css('left', '0%');
		$('.work-container').hide(800);

	})

}

function workLoad() {

	$.ajaxSetup ({ cache: true });

	$('.thumb-unit').click( function() {

		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = 'assets/work/' + newFolder + '.html';
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);

	});

}