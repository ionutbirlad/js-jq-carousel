$(document).ready(function() {

    // Invoco le funzioni per cambiare slide

    /* ==> Opzione 1
    setInterval(nextSlide, 2000);
    */


    // Opzione 2
    // var presentazione = setInterval(function () {
    //   nextSlide()
    // }, 2000);


    // Opzione 3 ==> blocco mouseenter e sblocco mouseleave
    $(function() {
    var interval = setInterval( nextSlide, 2000);

    $('.images').hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval( nextSlide, 2000);
    });
});



    // Definisco le funzioni nextImage e prevImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    // FUNZIONE PrevSlide
    function prevSlide() {
        if ( $('.images img.active').hasClass('first') ) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prevImg = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            prevImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prevPallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            prevPallino.addClass('active');
        }
    }




});
