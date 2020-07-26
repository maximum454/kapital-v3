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
    });


    //табы популярные новости
    function loadPopularNews(filterBy) {
        $('.js-popular-aside').hide();
        $('#js-popular-aside-'+ filterBy).show();
    }
    $(".popular-aside__widget").on('click',function () {
        var filterBy = this.dataset.filterby || null;

        if (!filterBy) {
            return false;
        }

        $(".popular-aside__widget").removeClass("popular-aside__widget--selected");
        $(this).addClass("popular-aside__widget--selected");
        loadPopularNews(filterBy);
    });
    loadPopularNews('week');
});