$(document).ready(function(){
    $('.main_btna, .main_btn, li:contains("расписания туров")').on('click', function(){
        $('.overlay').animate({
            opacity: 'show'
        },2000);
        $('.modal').slideDown('slow');
    });
   
    $('[aria-hidden="true"]:first').on('click', function () {
        $('.overlay').animate({
            opacity: 'hide'
        }, 1000);
        $('.modal').slideUp('slow');
    });
});

