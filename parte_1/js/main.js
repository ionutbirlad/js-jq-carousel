$(document).ready(function() {

    // Invoco le funzioni per cambiare slide

    /* ==> Opzione 1
    $('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva
    $('.prev').click(prevSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la precedente
    */

    // Opzione 2
    $(".next").click(function () {
      nextSlide();
    });
    $(".prev").click(function () {
      prevSlide();
    });
    // $(".slider-nav label").click(function () {
    //   if (!($(this).hasClass("active"))) {
    //     $(".slider-nav i").removeClass("active");
    //     $(this).addClass("active");
    //   }
    // });


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
