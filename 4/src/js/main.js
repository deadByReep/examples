$(document).ready(function() {
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#closeModal');
	var link = $('.link-btn');
	button.on('click', function() {
		modal.addClass('modal_active');
	});
	link.on('click', function() {
		modal.addClass('modal_active')
	});
	close.on('click', function() {
		modal.removeClass('modal_active')
	});
});

(function($) {
$(function() {
  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })
})
});


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){   
     $('#up').removeClass('fixed');
   }
   lastScrollTop = st;
});



$('#form').validate({
	rules: {
		phone: {
			required: true,
		},
		username: {
			required: true,
			minlength: 2,
			maxlength: 15,
		}	
	},
	messages: {
		username: {
			required: "Укажите имя",
			minlength:"Минимум символов: 2",
			maxlength:"Максимум символов: 15"
		},
		phone: {
			required: "Введите номер телефона"
		}
	}
});

$('#brif-form').validate({
	rules: {
		phone: {
			required: true,
		},
		username: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		email: {
			required: true,
			email: true
		}	
	},
	messages: {
		username: {
			required: "Укажите имя",
			minlength: jQuery.validator.format("Минимум символов: 2"),
			maxlength: jQuery.validator.format("Максимум символов: 15")
		},
		phone: {
			required: "Введите номер телефона"
		},
		email: {
			required:"Введите email",
			email:"Введите email"
		}
	}
});

$('#phone').mask("8 (999) 999-99-99");
$('#brif-phone').mask("8 (999) 999-99-99");

$(document).ready(function() {
			$('.slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				prevArrow: $('.arrows__left'),
				nextArrow: $('.arrows__right'),
				responsive: [
				{
					breakpoint: 1250,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			});
		});


var myMapTemp,myPlacemarkTemp,spinner=$(".ymap-container").children(".loader"),check_if_load=!1;function init(){var e=new ymaps.Map("map-yandex",{center:[55.6114,37.2011],zoom:17,controls:["zoomControl","fullscreenControl"]},{suppressMapOpenBlock:!0});e.behaviors.disable("scrollZoom");var n=new ymaps.GeoObject({geometry:{type:"Point",coordinates:[55.6114,37.2011]}});e.geoObjects.add(n),waitForTilesLoad(e.layers.get(0).get(0)).then(function(){spinner.removeClass("is-active")})}function waitForTilesLoad(o){return new ymaps.vow.Promise(function(e,n){var a=getTileContainer(o),t=!0;a.tiles.each(function(e,n){e.isReady()||(t=!1)}),t?e():a.events.once("ready",function(){e()})})}function getTileContainer(e){for(var n in e)if(e.hasOwnProperty(n)&&(e[n]instanceof ymaps.layer.tileContainer.CanvasContainer||e[n]instanceof ymaps.layer.tileContainer.DomContainer))return e[n];return null}function loadScript(e,n){var a=document.createElement("script");a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,n())}:a.onload=function(){n()},a.src=e,document.getElementsByTagName("head")[0].appendChild(a)}var ymap=function(){$(".ymap-container").mouseenter(function(){check_if_load||(check_if_load=!0,spinner.addClass("is-active"),loadScript("https://api-maps.yandex.ru/2.1/?apikey=(f9942301-4501-47e0-b07b-70e902931c78)&lang=ru_RU",function(){ymaps.load(init)}))})};$(function(){ymap()});
$(window).width(function(){$(window).width()<992&&($(".wow").removeClass("wow"),$(".fadeInLeft").removeClass("fadeInLeft"),$(".fadeInRight").removeClass("fadeInRight"))});