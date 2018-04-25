$(document).scroll(function(){
    const off = $(document).scrollTop();

    const banner = $('#banner').height();
    const nav = document.getElementsByClassName('home-nav')[0];
    if(off > banner-50){
        nav.style.color = "black";
        nav.style.border = "5px black solid";
        nav.style.zIndex = "999";
    }else{
        nav.style.color = "white";
        nav.style.border = "5px white solid";  
    }
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js-grape', 'static/banners/particlesjs-config-grape.json', function() {
    console.log('callback - particles.js config loaded');
});