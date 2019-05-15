$(document).ready(function() {

    $('body').on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });

    var $slideMenu = $('#menu-slide'), $body = $('body');

    function openMenu() {
        $slideMenu.addClass('menu-active');
        $body.addClass('menu-open');
    }

    function closeMenu() {
        $slideMenu.removeClass('menu-active');
        $body.removeClass('menu-open');
    }

    $('#toggle-slide-menu').on('click', function() {
        openMenu();
    });

    $slideMenu.find('.menu-backdrop').on('click', function() {
        closeMenu();
    });


    $('.nav-panel ul li').each(function() {
        $slideMenu.find('ul').append('<li>' + $(this).html() + '</li>');
        $slideMenu.find('.menu-items a').on('click', function(e) {
            closeMenu();
        });
        $slideMenu.find('ul').find('[data-ico]').remove();
    });


});