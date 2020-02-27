document.addEventListener("DOMContentLoaded", function() {
    //Lazy Load
    let lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
    lazyLoadInstance.update();
    //hover
    function hoverItem(item){
       $(item).hover(function () {
           $(this).children('.submenu').fadeIn('slow');
       },function () {
           $(this).children('.submenu').fadeOut('slow');
       });
    }
   if($(window).width()>1045){
       hoverItem('.menu-item');
       hoverItem('.submenu-item');
   }
   $(window).resize(function () {
       if($(window).width()>1045){
           hoverItem('.menu-item');
           hoverItem('.submenu-item');
       }
   });
   $('.submenu').siblings('a').addClass('submenu-active');
    //Фиксированный хедер
    $(window).bind('scroll', function() {
        let header = $('.header-container.fixed-header');
        if($(window).scrollTop() > header.height()) {
            header.addClass('active');
        }
        else {
            header.removeClass('active');
        }
        if(header.hasClass('active')){
            header.find('.logo img').attr('src','img/icons/logo-fixed.svg');
        }else{
            header.find('.logo img').attr('src','img/icons/logo.svg');
        }
    });
    //Toggle Search
    $('.btn-search').click(function () {
        $(this).fadeOut(1);
        $('.nav-menu-list').fadeOut(1);
        $('.search-form-container').fadeIn(1);
    });
    $('.close-search-form').click(function () {
        $('.search-form-container').fadeOut(1);
        $('.nav-menu-list').fadeIn(1);
        $('.btn-search').fadeIn(1);
    });
    // Установка звёзд
    $('.reviews-list').each(function(){
        let colStar = $(this).attr('data-reviews');
        if(colStar != 0 && colStar <= 5){
            let currentItems = $(this).find('.reviews-item');
            for(let i = 0;i<colStar;i++){
                currentItems[i].classList.remove('far');
                currentItems[i].classList.add('fas');
            }
        }
    });
    //Benefits slider
    $('.benefits-slider').slick({
        lazyLoad: 'progressive',
        slideToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        prevArrow: '<span class="btn slider-btn-left"></span>',
        nextArrow: '<span class="btn slider-btn-right"></span>',
        appendArrows: '.arrows-container',
        responsive: [
            {
                breakpoint: 900,
                settings:{
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    centerMode: true,

                }
            },
            {
                breakpoint: 680,
                settings:{
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false

                }
            }
        ]
    });
    //Progress Bar
    let currentProgress = [];
    $('.review-banner-item-progress').each(function () {
       currentProgress.push($(this).attr('data-progress'));
    });
    for(let i = 0;i<currentProgress.length;i++){
        let currentProgressItem = document.querySelectorAll('.review-progressbar');
        if(currentProgress[i] >0 &&  currentProgress[i] <= 10){
            currentProgressItem[i].style.width = currentProgress[i].replace('.','')+'%';
        }
    }
    //Tabs
    $('.faq-list').collapsible();
    // More articles-slider
    $('.more-articles-slider').slick({
        infinite: true,
        nextArrow: '<span class="btn slider-btn-right"></span>',
        prevArrow: '<span class="btn slider-btn-left"></span>',
        slidesToShow:   2,
        slidesToScroll: 1,
        appendArrows: '.arrows-container',
        responsive:[
            {
                breakpoint: 680,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    });
    //Fixed table
    $('.table-fixed-hidden').click(function(){
        $('.table-fixed').addClass('active');
    });
    $('.table-fixed-toggle .close-btn').click(function(){
        $('.table-fixed').removeClass('active');
    });
    //Cookie bar
    $('.close-cookie-bar').click(function () {
        $('.cookie-bar').addClass('hidden');
    });
    $('.cookie-bar-accept').click(function () {
        $('.cookie-bar').addClass('hidden');
        localStorage.cookiebar = 'hidden';
    });
    if(localStorage.cookiebar == 'hidden'){
        $('.cookie-bar').addClass('hidden');
    }
    //Toggle-menu
    $('.toggle-menu').click(function () {
        $(this).toggleClass('active');
        $('.header-container').toggleClass('active-nav');
    });
    $('.submenu-active').after('<span class="toggle-submenu">&#9660;</span>');
    $('.toggle-submenu').click(function () {
        $(this).toggleClass('active');
        $(this).next('.submenu').fadeToggle('slow');
    });
    if($(window).width() <= 483){
        let mobileImg = $('.main-banner').attr('data-mobile-img');
        $('.main-banner').attr('data-bg',mobileImg);
    }
    $(window).resize(function () {
        let mobileImg = $('.main-banner').attr('data-mobile-img');
        $('.main-banner').attr('data-bg',mobileImg);
    });
});

