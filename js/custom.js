$(function(){
	'use strict';
	
	// Adjust Header Height
	var myHeader =  $('.header'),
		mySlider= $('.bxslider');
	
	 myHeader .height($(window).height());
	
	$(window).resize(function(){
		
	    myHeader.height($(window).height());	
		
	mySlider.each(function(){
	 $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2 );	
	});
		
	});
	// Links Add Active Class
	$('.links li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	//Bxslider List Item
	mySlider.each(function(){
	 $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2 );	
	});
	//Trigger The Box Slider
         mySlider.bxSlider({
			 pager: false
		 });
     
	 // Smooth Scroll To Div
	$('.ser').click(function(){
		$('html, body').animate({
			scrollTop: $('#services').offset().top
		}, 1000);
	});
	$('.Tes').click(function(){
		$('html, body').animate({
			scrollTop: $('#testim').offset().top
		}, 1000);
	});
	
		$('.Port').click(function(){
		$('html, body').animate({
			scrollTop: $('#ourpro').offset().top
		}, 1000);
	});
	$('.Con').click(function(){
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 1000);
	});
	(function autoSlider(){
		$('.slider .active').each(function(){
			if(!$(this).is(':last-child')){
			$(this).delay(3000).fadeOut(1000,function(){
			$(this).removeClass('active').next().addClass('active').fadeIn();
			autoSlider();	
			});		
			}else{
			$(this).delay(3000).fadeOut(1000,function(){
			$(this).removeClass('active');
			$('.slider div').eq(0).addClass('active').fadeIn();	
			autoSlider();	
			});		
			}
		});
	}());
	//Triger MixitUp
	
    var containerEl = document.querySelector('#container');
    var mixer = mixitup(containerEl);
	
	$('.shuffle li').click(function(){
		$(this).addClass('selected').siblings().removeClass();
	});
	//Triger NiceScroll
	
	$(function() {  
    $("body").niceScroll({
		
	cursorcolor:"#1abc9c",
	cursorwidth:"8px",
	cursorborder:"1px solid #1abc9c"	
	});
});
	
	
	
	
	
	
});