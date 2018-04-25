$(document).ready(function(){
    /*! Fades in whole page on load */
    $('body').css('display', 'none');
    $('body').fadeIn(400);
}); 


/*! Fades out the whole page when clicking links */
$('a').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(newpage);
});

function newpage() {
    window.location = newLocation;
}

function Reload() {
    try {
        var headElement = document.getElementsByTagName("head")[0];
        if (headElement && headElement.innerHTML){
            headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
        }    
    }
    catch (e) {}
}

// $(document).scroll(function(){
//     const off = $(document).scrollTop();

//     const banner = $('#banner').height();
//     const nav = document.getElementsByClassName('home-nav')[0];
//     if(off > banner-50){
//         nav.style.color = "black";
//         nav.style.border = "5px black solid";
//         nav.style.zIndex = "999";
//     }else{
//         nav.style.color = "white";
//         nav.style.border = "5px white solid";  
//     }
// });