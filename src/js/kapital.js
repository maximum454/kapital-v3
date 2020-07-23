@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/priority-nav.js')
@@include('partials/jquery.knob.js')
@@include('partials/slick.js')

$(function(){
    var nav = priorityNav.init({
        mainNavWrapper: ".nav__wrapper",
        mainNav: ".nav__menu",
        navDropdownLabel: '...',
        navDropdownClassName: "nav__dropdown",
        navDropdownToggleClassName: "nav__dropdown-toggle",
    });

    $('.js-special-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
});