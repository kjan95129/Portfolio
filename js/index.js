/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

document.addEventListener("touchstart", function(){}, true);    

if ($(window).width() < 769) {
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

var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    MAX_PARTICLES = 300,
    DRAW_INTERVAL = 60,
    container = document.querySelector('#container'),
    canvas = document.querySelector('#pixie'),
    context = canvas.getContext('2d'),
    gradient = null,
    pixies = new Array();

if ($(window).width() < 769){
    MAX_PARTICLES = 200
}else{
    MAX_PARTICLES = 600
}

function setDimensions(e) {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    container.style.width = WIDTH+'px';
    container.style.height = HEIGHT+'px';
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}
setDimensions();
window.addEventListener('resize', setDimensions);

function Circle() {
    this.settings = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

    this.reset = function() {
        this.x = (this.settings.random ? WIDTH*Math.random() : this.settings.xdef);
        this.y = (this.settings.random ? HEIGHT*Math.random() : this.settings.ydef);
        this.r = ((this.settings.rmax-1)*Math.random()) + 1;
        this.dx = (Math.random()*this.settings.xmax) * (Math.random() < .5 ? -1 : 1);
        this.dy = (Math.random()*this.settings.ymax) * (Math.random() < .5 ? -1 : 1);
        this.hl = (this.settings.ttl/DRAW_INTERVAL)*(this.r/this.settings.rmax);
        this.rt = Math.random()*this.hl;
        this.settings.rt = Math.random()+1;
        this.stop = Math.random()*.2+.4;
        this.settings.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        this.settings.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
    }

    this.fade = function() {
        this.rt += this.settings.rt;
    }

    this.draw = function() {
        if(this.settings.blink && (this.rt <= 0 || this.rt >= this.hl)) {
            this.settings.rt = this.settings.rt*-1;
        } else if(this.rt >= this.hl) {
            this.reset();
        }

        var newo = 1-(this.rt/this.hl);
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
        context.closePath();

        var cr = this.r*newo;
        gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
        gradient.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
        gradient.addColorStop(this.stop, 'rgba(77,101,181,'+(newo*.6)+')');
        gradient.addColorStop(1.0, 'rgba(77,101,181,0)');
        context.fillStyle = gradient;
        context.fill();
    }

    this.move = function() {
        this.x += (this.rt/this.hl)*this.dx;
        this.y += (this.rt/this.hl)*this.dy;
        if(this.x > WIDTH || this.x < 0) this.dx *= -1;
        if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
    }

    this.getX = function() { return this.x; }
    this.getY = function() { return this.y; }
}

for (var i = 0; i < MAX_PARTICLES; i++) {
    pixies.push(new Circle());
    pixies[i].reset();
}

function draw() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    for(var i = 0; i < pixies.length; i++) {
        pixies[i].fade();
        pixies[i].move();
        pixies[i].draw();
    }
}

setInterval(draw, DRAW_INTERVAL);
