import $ from "jquery";
    let windowWidth = $(window).width();

    const handleTouchMoveNavigation = function (ev) {
        if (!$(ev.target).closest('#header-navigation').length) {
            ev.preventDefault();
        }
    }
    const handleHeaderMobile = () => {
        if (windowWidth < 992) {
            let elmBody = $('#my-body'),
                elmHamburger = $('#header-hamburger'),
                elmNavigation = $('#header-navigation'),
                elmOverlay = $('#header-overlay'),
                elmCloseNavigation = $('#header-navigation_close');

            elmNavigation.find('ul > li > ul > li').map(function (index) {
                $(this).parent().prev('a').attr({
                    'data-toggle': 'collapse',
                    'data-target': "#header-sub_" + index,
                });
                $(this).parent().attr({
                    "id": "header-sub_" + index,
                    "class": "navigation-sub collapse",
                    "data-parent": "#header-navigation"
                });
            });

            elmHamburger.click(function () {
                if (elmBody.hasClass('is-show_navigation')) {
                    elmBody.attr({
                        'class': 'is-none_navigation',
                        'style': 'text-decoration: none'
                    });
                    document.removeEventListener('touchmove', handleTouchMoveNavigation);
                    $('.collapse').hide();
                } else {
                    document.addEventListener('touchmove', handleTouchMoveNavigation, {
                        passive: false
                    });
                    elmBody.attr({
                        'class': 'is-show_navigation',
                        'style': 'overflow-y: hidden'
                    });
                }
            });
            elmOverlay.add(elmCloseNavigation).on('click',function () {
                elmHamburger.trigger('click');
            });
        }
    }

    const handleEffectButton = function () {
        $('.btn-theme').on('mouseenter', function (e) {
            let parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        }).on('mouseout', function (e) {
            let parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        });
    }

    const handleToggleSearch = function() {
        let btnElm = $('.btn-call_search'),
            wrapperBtnElm = btnElm.parent();
        btnElm.click(function () {
            if (wrapperBtnElm.hasClass('is-show')) {
                btnElm.html('<i class="far fa-search"></i>');
                wrapperBtnElm.removeClass('is-show');
            } else {
                btnElm.html('<i class="far fa-times"></i>');
                wrapperBtnElm.addClass('is-show');
            }
        });
    }

    const handleFloatInput = function () {
        $('.form-theme .form-theme_item .form-theme_item__input').blur(function () {
            if ($(this).val() !== "") {
                $(this).closest('.form-theme_item').addClass("valid");
            } else {
                $(this).closest('.form-theme_item').removeClass("valid");
            }
        });

        if ($('.form-theme .form-theme_item .form-theme_item__input').length > 0) {
            $('.form-theme .form-theme_item .form-theme_item__input').map(function () {
                if ($(this).val() !== '') {
                    $(this).parent().addClass('valid');
                }
            });
        }
    }

    $(function () {
        handleHeaderMobile();
        handleEffectButton();
        handleToggleSearch();
        handleFloatInput();
    });
