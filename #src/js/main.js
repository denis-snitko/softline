$(document).ready(function () {


    // Search show

    let $searchInput = $('.form__input');
    let $searchResult = $('.search__result');

    $searchInput.focusin(function () {
        $searchResult.show(150);
    });

    $searchInput.focusout(function () {
        $searchResult.hide(150);
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
})



