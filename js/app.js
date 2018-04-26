$('body').bind('touchstart', function() {});

$(document).ready(function(){
    /*! Fades in whole page on load */
    $('body').css('display', 'none');
    $('body').fadeIn(400);
}); 


/*! Fades out the whole page when clicking links */
$('.internal').click(function(e) {
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