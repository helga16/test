$(function(){
	$('.header_menu_burger').on('click', function(){
		$('.header_menu').slideToggle(300, function(){
			if($(this).css('display')=== 'none'){
				$(this).removeAttr('style');
			}
		});
	});
});
window.onscroll = function(){
//$('.me__image').effect('drop',{mode:'show', direction:'right'},3000);

$('.me__image').effect('puff',{mode:'show', persent:100},3000);


}


$(function(){
    $('.portfolio__button').each(function(){
$(this).on('click', function(){
  $(this).addClass('checked').html('Закрыть');
$('button.checked+.portfolio__text-none').slideToggle(300, function(){
                if($(this).css('display')=== 'none'){
                $(this).removeAttr('visibility');
                $('.portfolio__button.checked').removeClass('checked').html('Описание');
            }
        });

});
        
    });
});


$(window).load(function() {
    if(window.matchMedia('(max-width: 768px)').matches){
$('#banners').nbc({
            easing: 'easeOutBack',
            items: 1,
            animationSpeed: 1000,
            draggable: true,
            mousewheel: true,
            pagination: true,
            slideWidth: 240,
            slideHeight: 300
        });
    }else{
        $('#banners').nbc({
            easing: 'easeOutBack',
            items: 3,
            animationSpeed: 1000,
            draggable: true,
            mousewheel: true,
            pagination: true,
            slideWidth: 260,
            slideHeight: 300
        });
    }
    });
$(document).ready(function(){
$('.responsive').slick({
  dots: true,
  infinite: false,
  //variableWidth: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
                  rows:2,
        slidesPerRow:1,

  responsive: [
    {
      breakpoint: 1199,
      settings: {
                rows:2,
        slidesPerRow:1,

        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        rows:1,
        slidesPerRow:1,
arrows:false,
  variableWidth: true,

        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});