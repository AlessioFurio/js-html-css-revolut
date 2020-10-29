$(document).ready(function() {

    $('.dropdownItem').mouseenter(function() {

        $(this).children('.dropdownMenu').addClass('active');
    });

    $('.dropdownItem').mouseleave(function() {

        $(this).children('.dropdownMenu').removeClass('active');
    });

});
