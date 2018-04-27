$('body').bind('touchstart', function() {});
window.onunload = function(){}; /* For back button press */

// $(document).ready(function(){
//     /*! Fades in whole page on load */
//     $('body').css('display', 'none');
//     $('body').fadeIn(400);
// }); 

window.onpopstate = function() { 
    window.onpopstate = function() {
        $('body').css('display', 'none');
        $('body').fadeIn(400);
    };
};

/*! Fades out the whole page when clicking links */
$('.internal').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(newpage);
});

function newpage() {
    window.location = newLocation;
}