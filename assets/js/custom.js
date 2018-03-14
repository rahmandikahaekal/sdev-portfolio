(function($) {
    'use strict';

    jQuery(document).ready(function() {

        $(window).on('load', function() {
            $("#status").fadeOut();
            $("#preloader").delay(500).fadeOut("slow");
        });



        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('#navigation').addClass('nav-bg');
            } else {
                $('#navigation').removeClass('nav-bg');
            }
        });




        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });




        var parallax = function() {
            $(window).stellar();
        };

        $(function() {
            parallax();
        });



        $(document).on('ready', function() {
            $('#text-rotator').rotatetext({
                fadeSpeed: 500,
                pauseSpeed: 2000
            });
        });



        var arrowBounce = function() {
            var arrow = $(".arrow");
            if (arrow.hasClass("lift")) {
                arrow.removeClass("lift");
            } else {
                arrow.addClass("lift");
            }
        };

        setInterval(arrowBounce, 800);




        $('a.smoth-scroll').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });




        $('#port-image').mixItUp();



        $('.flexslider').flexslider({
            animation: "fade",
            directionNav: false
        });



        AOS.init({
            duration: 1200,
            once: true,
            disable: 'mobile'
        });



		$(function () {
			$('#contact-form').validate({
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true
					},
					message: {
						required: true
					}
				},
				messages: {
					name: {
						required: "Please Input Your Name",
						minlength: "your name must consist of at least 2 characters"
					},
					email: {
						required: "Please Input Your Email"
					},
					message: {
						required: "Your Message Required"
					}
				},
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "php/process.php",
						success: function () {
							$('#contact :input').attr('disabled', 'disabled');
							$('#contact').fadeTo("slow", 1, function () {
								$(this).find(':input').attr('disabled', 'disabled');
								$(this).find('label').css('cursor', 'default');
								$('#success').fadeIn();
							});
						},
						error: function () {
							$('#contact').fadeTo("slow", 1, function () {
								$('#error').fadeIn();
							});
						}
					});
				}
			});
		});




    });

})(jQuery);