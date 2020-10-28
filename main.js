$(document).ready(function(){

    // mouseenter e mouseleave per <li><a href="">Funzionalità</a></li>

    // $('.headerRight ul li:first-child').mouseenter(function(){
    //     $('.dropdownFunz').addClass('show');
    // });
    //
    // $('.dropdownFunz').mouseleave(function(){
    //     $('.dropdownFunz').removeClass('show');
    // });
    //
    // // mouseenter e mouseleave per <li><a href="">Abbonamenti</a></li>
    //
    // $('.headerRight ul li:nth-child(2)').mouseenter(function(){
    //     $('.dropdownAbb').addClass('show');
    // });
    //
    // $('.dropdownAbb').mouseleave(function(){
    //     $('.dropdownAbb').removeClass('show');
    // });
    //
    //
    // // mouseenter e mouseleave per <li><a href="">ChiSiamo</a></li>
    //
    // $('.headerRight ul li:nth-child(3)').mouseenter(function(){
    //     $('.dropdownChiSiamo').addClass('show');
    // });
    //
    // $('.dropdownChiSiamo').mouseleave(function(){
    //     $('.dropdownChiSiamo').removeClass('show');
    // });
    //
    //
    // // mouseenter e mouseleave per <li><a href="">Aiuto</a></li>
    //
    // $('.headerRight ul li:nth-child(4)').mouseenter(function(){
    //     $('.dropdownAiuto').addClass('show');
    // });
    //
    // $('.dropdownAiuto').mouseleave(function(){
    //     $('.dropdownAiuto').removeClass('show');
    // });


    $('.menuDrop').each(function(){
        var indice = $(this).index();

        if (indice == 1){

            $('#funz').mouseenter(function(){
                    $('.dropdownFunz').addClass('show');
                    });
            $('.dropdownFunz').mouseenter(function(){
                    $('.dropdownFunz').addClass('show');
                    });

            $('.headerRight ul li').mouseleave(function(){
                    $('.dropdownFunz').removeClass('show');
                    });

            $('.dropdownFunz').mouseleave(function(){
                    $('.dropdownFunz').removeClass('show');
                    });

                }

        else if (indice == 2) {
            $('#abb').mouseenter(function(){
                    $('.dropdownAbb').addClass('show');
                    });

            $('.dropdownAbb').mouseenter(function(){
                    $('.dropdownAbb').addClass('show');
                    });

            $('.headerRight ul li').mouseleave(function(){
                    $('.dropdownAbb').removeClass('show');
                    });

            $('.dropdownAbb').mouseleave(function(){
                    $('.dropdownAbb').removeClass('show');
                    });

        }
        else if (indice == 3) {
            $('#chiSiamo').mouseenter(function(){
                    $('.dropdownChiSiamo').addClass('show');
                    });

            $('.dropdownChiSiamo').mouseenter(function(){
                    $('.dropdownChiSiamo').addClass('show');
                    });

                    $('.headerRight ul li').mouseleave(function(){
                    $('.dropdownChiSiamo').removeClass('show');
                            });
                    $('.dropdownChiSiamo').mouseleave(function(){
                            $('.dropdownChiSiamo').removeClass('show');
                            });

        }
        else if (indice == 4) {
            $('#aiuto').mouseenter(function(){
                    $('.dropdownAiuto').addClass('show');
                    });

            $('.dropdownAiuto').mouseenter(function(){
                    $('.dropdownAiuto').addClass('show');
                    });

                    $('.headerRight ul li').mouseleave(function(){
                    $('.dropdownAiuto').removeClass('show');
                            });

                    $('.dropdownAiuto').mouseleave(function(){
                            $('.dropdownAiuto').removeClass('show');
                            });
        }

    });











});
