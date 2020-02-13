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
   hoverItem('.menu-item');
   hoverItem('.submenu-item');
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
        console.log(colStar);
        if(colStar != 0 && colStar <= 5){
            let currentItems = $(this).find('.reviews-item');
            for(let i = 0;i<colStar;i++){
                currentItems[i].classList.remove('far');
                currentItems[i].classList.add('fas');
            }
        }
    });
});

