$(document).ready(function () {


    function RippleStyle(width, height, posX, posY) {
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }

    $('.btn').on('mousedown', function (e) {

        let rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);
        let pos = $(this).offset();
        let width = $(this).outerWidth();
        let height = $(this).outerHeight();
        let posX = e.pageX - pos.left;
        let posY = e.pageY - pos.top;
        let rippleStyle = new RippleStyle(width, height, posX, posY);
        rippleEl.css(rippleStyle);
    });

    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function () {
        $(this).remove();
    });


    const container = document.querySelectorAll(".container");
    const loginForm = container[0];
    const registerForm = container[1]

    function switchToRegistrationForm() {
        $(loginForm).animate({
            opacity: 0,
            marginLeft: '-100%',

        }, 1000, function () {
            $(loginForm).hide();
            $(registerForm).css({
                opacity: 0,
                marginLeft: '100%',

            }).show().animate({
                opacity: 1,
                marginLeft: '0'
            }, 1000);
        });
    }

    function switchToLoginForm() {
        $(registerForm).animate({
            opacity: 0,
            marginLeft: '100%',

        }, 1000, function () {
            $(registerForm).hide();
            $(loginForm).css({
                opacity: 0,
                marginLeft: '-100%',

            }).show().animate({
                opacity: 1,
                marginLeft: '0'
            }, 1000);
        });
    }

    $('.login-link').on('click', function (e) {
        e.preventDefault();
        switchToRegistrationForm();
    });

    $('.reg-link').on('click', function (e) {
        e.preventDefault();
        switchToLoginForm();
    });

    function showSuccessPopup() {
        $('#successPopup').fadeIn('slow', function () {
            setTimeout(function () {
                $('#successPopup').fadeOut('slow');
            }, 3000);
        });
    }

    $('.btn-register').on('click', function (e) {
        e.preventDefault();
        showSuccessPopup();
    });

});
