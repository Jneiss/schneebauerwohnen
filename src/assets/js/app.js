


$(document).foundation();

$(document).ready(function(){
  $('.header-slideshow').slick({
 //  autoplay: true,
   autoplaySpeed: 3000,

  });


$('#nav').onePageNav();

});

$('.top-bar-title').on('click','a',function(){
	$('#nav').children().removeClass('current');
});




function ready() {
    var box = document.getElementById('sticky-bar');
    var top = 0;
    function scroll(event) {
        var y = document['documentElement' || 'body'].scrollTop;

        if (y > top) box.classList.add('shrink');
        else box.classList.remove('shrink');

    }

    window.addEventListener('scroll', scroll);
}

if (document.readyState == 'complete' || document.readyState == 'loaded') {
    ready();
} else {
    window.addEventListener('DOMContentLoaded', ready);
};


