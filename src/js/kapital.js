@@include('partials/jquery.min.js')
@@include('partials/webp.js')
@@include('partials/priority-nav.js')
@@include('partials/jquery.knob.js')
@@include('partials/slick.js')
@@include('partials/likely.js')
@@include('partials/lazysizes.min.js')
@@include('partials/audiobutton.js')
@@include('partials/audioplayer.js')
@@include('partials/datepicker.min.js')
@@include('partials/jquery.mask.js')
@@include('partials/medium-zoom.min.js')

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

    //Слайдер для лонгрида с счетчиком
    var $sliderLongrid = $('.js-slider-longrid');
    var $status = $('.slider-longrid__count');

    $sliderLongrid.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $sliderLongrid.slick({
        autoplay: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    //end


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


    /*infinity scroll*/
    var listElm = document.querySelector('#infinite-list');

    // Add 20 items.
    var nextItem = 1;
    var loadMore = function() {
        for (var i = 0; i < 1; i++) {
            var item = document.createElement('li');
            item.innerText = 'Item ' + nextItem++;
            listElm.appendChild(item);
        }
    }

    // Detect when scrolled to bottom.
    listElm.addEventListener('scroll', function() {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            loadMore();
        }
    });

    // Initially load some items.
    loadMore();

    /*end infinity scroll*/
});