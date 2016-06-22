/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 200) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("a").addClass("black");
        $("a").removeClass("white");
        $("button").addClass("black");
        $("button").removeClass("white");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("a").removeClass("black");
        $("a").addClass("white");
        $("button").removeClass("black");
        $("button").addClass("white");
    }
}

/*function highlightNavbar(){
    if($(".navbar").offset(".about") > 0){
        $("#about").addClass("active");
    }
}*/

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});


$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

// my skills section
$(window).scroll(function() {   
  if(isScrolledIntoView('#skills') === true){  
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1500);
	});
 }  
});

/*$('window').on('touchmove', function(event) {
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},1500);
	});
}*/

/*jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});*/

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

