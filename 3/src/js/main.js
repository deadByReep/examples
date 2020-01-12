window.onload=function(){
    //dropdown tour
let menuElem = document.getElementById('dropdown-menu'),
    titleElem = menuElem.querySelector('.dropdown-title');
    document.onclick = function(event) {
    let target = elem = event.target;
    while (target != this) {
          if (target == menuElem) {
          if(elem.tagName == 'SPAN') titleElem.innerHTML = elem.textContent;
          menuElem.classList.toggle('open')
              return;
          }
          target = target.parentNode;
      }
    menuElem.classList.remove('open');
}
//main tabs
$(function() {
  $('.main-tabs').delegate('li:not(.chosen)', 'click', function() {
    $(this).addClass('chosen').siblings().removeClass('chosen')
     .parents('.wrap-main-tabs').find('.main-tabs-content')
     .hide().eq( $(this).index() ).fadeIn(170);
  });
});

//Tabs
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};
tab();
//calendar
$('.date').flatpickr();
//tickets dropdown
        var globalCount = 0,ticketsPlus = document.querySelector('.tickets_plus');
        $('.tickets_minus').click(function () {
            var $input = $(this).parent().find('input');
            if($input.val() <=0){
                globalCount -= 0;
                var count = parseInt($input.val());
            } else{
                var count = parseInt($input.val()) - 1;
                globalCount -=1
            }
            count = count < 0 ? 0 : count;
            $input.val(count);
            $input.change();
            //globalCount <= 0? globalCount = 0:globalCount -= 1;
            console.log(globalCount)
            return false;
        });
        $('.tickets_plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.change();
            if(globalCount >= 10){
                globalCount = 10;  
            } else{
                $input.val(parseInt($input.val()) + 1);
                globalCount +=1
            }
            console.log(globalCount)
            return false;
        });
        $('#drop').click(function(event) {
          this.classList.toggle('open');
          let $span = document.querySelector('.tickets-title'),title = document.querySelectorAll('.tickets__name'),counts = document.querySelectorAll('.tickets__count'),subtotal = document.getElementById('subtotal'),modalSubtotal = document.querySelector('.modal__subtotal'),choseArray = [document.querySelector('.adults__chose'),document.querySelector('.senior__chose'),document.querySelector('.yuth__chose'),document.querySelector('.children__chose')];
          $span.innerHTML = '';
          if(subtotal.classList.contains('subtotal') == false) subtotal.className += 'subtotal';
          for(var i = 0;i<title.length && i<counts.length && i<choseArray.length;i++){
            $span.innerHTML += counts[i].value > 0 ? title[i].innerHTML+' x '+counts[i].value+'; ' : '';
            choseArray[i].innerHTML = counts[i].value > 0? title[i].innerHTML + ': '+counts[i].value + (counts[i].value>1?' persons':' person') : '';
            subtotal.innerHTML = "Subtotal: "+'$'+(28 * counts[0].value+26 * counts[1].value+14 * counts[2].value);
            modalSubtotal.innerHTML = "Subtotal: "+'$'+(28 * counts[0].value+26 * counts[1].value+14 * counts[2].value);
          } 
    });
    $('.chose__input').mask('(999) 999-9999');

    //modal
    var modal = document.getElementById("myModal");
    var btn = document.querySelector(".book__btn");
    var close = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    close.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }    
}
//modal