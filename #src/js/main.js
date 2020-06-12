$(document).ready(function () {


    // Search show
    let $searchInput = $('.form__input');
    let $searchResult = $('.search__result');

    $searchInput.focusin(function () {
        $searchResult.show(150);
        $('.search__form').height(380);
    });

    $searchInput.focusout(function () {
        $searchResult.hide(150);
        $('.search__form').height(46);
    });


    // Main tabs
    $('.main-tabs__title-item').click(function () {
        let id = $(this).attr('data-tab'),
            content = $('.main-tabs__content-item[data-tab="' + id + '"]');

        $('.main-tabs__title-item.main-tabs--active').removeClass('main-tabs--active');
        $(this).addClass('main-tabs--active');

        $('.main-tabs__content-item').removeClass('active');
        content.addClass('active');
    });


    // Owl
    $('.owl-carousel-main').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },

            768: {
                items: 3,
                nav: true
            }
        }
    })

    // Owl-vendors
    $('.owl-carousel--vendors').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },

            768: {
                items: 4,
                // nav: true
            }
        }
    })

})





