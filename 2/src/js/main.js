//map
const mapButton = document.getElementById('mapButton');
const mapBlock = document.getElementById('map');
const hero = document.getElementById('hero');
function getMap(btn){
    if(btn.value == "Map") {
    	btn.value = "List";
    	mapBlock.style.display = "flex";
    	hero.style.display = "none";
    } else{
    	btn.value = "Map";
    	mapBlock.style.display = "none";
    	hero.style.display = "flex";
    }
}
//filter
document.getElementById('filter').addEventListener('click', () => {
  	document.querySelector('.menu_mobile').classList.add('active');
  	document.querySelector('.close-menu').classList.add('close-menu-active');
  	document.querySelector('.fade').style.display = "inline-block";
})
document.querySelector('.close-menu').addEventListener('click', () => {
 	document.querySelector('.menu_mobile').classList.remove('active');
 	document.querySelector('.close-menu').classList.remove('close-menu-active');
 	document.querySelector('.fade').style.display = "none";
})
//scroll
$(document).ready(function () {
      var offset = $('#mapBlock').offset();
    var topPadding = 0;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $('#mapBlock').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
        }
        else {
            $('#mapBlock').stop().animate({marginTop: 0});
        }
    });
});

//slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}