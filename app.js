$(document).ready(function () {


    function RippleStyle(width, height, posX, posY) {
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }

    $('.btn').on('mousedown', function (e) {

        let rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);
        console.log("clicked")
        console.log(rippleEl)

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


});
