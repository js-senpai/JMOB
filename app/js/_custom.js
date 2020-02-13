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
});

