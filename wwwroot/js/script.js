$(document).ready(function () {
    $('.card').on('click', function () {
        if (!$('.card-front').hasClass('card-front-active')) {
            $('.card-front').addClass('card-front-active');
            $('.card-back').addClass('card-back-hidden');
            setTimeout(function () {
                $('.part-top').removeClass('part-top-close');
                setTimeout(function () {
                    $('.message').removeClass('message-hide');
                }, 1000)
            }, 3000)
        }
        else {
            $('.message').addClass('message-hide');
            setTimeout(function () {
                $('.part-top').addClass('part-top-close');
                setTimeout(function () {
                    $('.card-front').removeClass('card-front-active');
                    $('.card-back').removeClass('card-back-hidden');
                }, 2000);
            }, 1000)
        }
    });
});


$(document).ready(function () {
    $('.choose-eng').on('click', function () {
        $('.lang-rus').addClass('lang-hide');
        $('.wrapper-hover').addClass('display-none');
    });
    $('.choose-rus').on('click', function () {
        $('.lang-eng').addClass('lang-hide');
        $('.wrapper-hover').addClass('display-none');
    });
});
