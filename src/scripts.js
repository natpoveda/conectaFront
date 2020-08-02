$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.materialboxed').materialbox();

    $('.carousel').carousel({
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 100,
    });
    
    /*
    autoplay();   
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 18500);
    }
*/
    $('.parallax').parallax();
    
    $('.carousel').carousel();

    $('select').formSelect();
    
    $('.sidenav').sidenav();

    var instance = M.Carousel.init({
      fullWidth: true,
      indicators: true
    });
  });