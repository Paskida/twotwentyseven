// Header autoplay carousel
$('.header__fade').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: false,
            cssEase: 'linear',
            initialSlide: 1
        });

// New releases section autoplay carousel
$('.new-releases__autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
    });


