$(function(){
	$('.header_menu_burger').on('click', function(){
		$('.header_menu').slideToggle(300, function(){
			if($(this).css('display')=== 'none'){
				$(this).removeAttr('style');
			}
		});
	});
});

$(window).load(function() {
        $('#banners').nbc({
            easing: 'easeOutBack',
            items: 3,
            animationSpeed: 1000,
            draggable: true,
            mousewheel: true,
            pagination: true,
            slideWidth: 260,
            slideHeight: 200
        });
    });