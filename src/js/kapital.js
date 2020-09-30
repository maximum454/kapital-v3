@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/priority-nav.js')
@@include('partials/jquery.knob.js')
@@include('partials/slick.js')
@@include('partials/likely.js')

$(function(){
    var nav = priorityNav.init({
        mainNavWrapper: ".nav__wrapper",
        mainNav: ".nav__menu",
        navDropdownLabel: '...',
        navDropdownClassName: "nav__dropdown",
        navDropdownToggleClassName: "nav__dropdown-toggle",
        breakPoint: 767,
    });

    //Слайдер спецпроевтов в сайдбаре
    $('.js-special-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    //слайдер выбор редакции в сайдбаре
    $('.js-editors-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300
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

    function countView(element) {
        if (element) {
            var data = {};
            data['View[model]'] = element.dataset.model;
            data['View[id]']    = element.dataset.id;
            data['View[token]'] = element.dataset.token;
            $.ajax({
                type: "POST",
                url: '/api/counter/view',
                data: data
            });
        }
    }

    /**
     * Get counters on page
     */
    var viewsCounters = document.getElementsByClassName("js-views-counter");
    Array.prototype.forEach.call(viewsCounters, function(el) {
        countView(el);
    });
});