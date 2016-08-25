/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

document.addEventListener("touchstart", function(){}, true);    

if ($(window).width() < 768) {
    //fade animation types under portfolio
    var element1 = document.getElementById("fader1"); 
    element1.setAttribute("data-aos", "fade-up");
    var element2 = document.getElementById("fader2"); 
    element2.setAttribute("data-aos", "fade-up");
    var element3 = document.getElementById("fader3"); 
    element3.setAttribute("data-aos", "fade-up");
    var element4 = document.getElementById("fader4"); 
    element4.setAttribute("data-aos", "fade-up");
    
    //fade delays under skills
    var skill1 = document.getElementById("languages"); 
    skill1.setAttribute("data-aos-delay", "0");
    var skill2 = document.getElementById("tools"); 
    skill2.setAttribute("data-aos-delay", "0");
    var skill3 = document.getElementById("experience"); 
    skill3.setAttribute("data-aos-delay", "0");
    var skill4 = document.getElementById("resume_button"); 
    skill4.setAttribute("data-aos-delay", "0");
    skill4.setAttribute("data-aos", "fade-up");
}  

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 100) {
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
$(function poop() {
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


$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});
