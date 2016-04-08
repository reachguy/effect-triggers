var $btnShowHide = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $btnCollapseExpand = $('.btn-collapse-expand');
var $btnBounce = $('.btn-bounce');
var $btnAppend = $('.btn-append');

$btnShowHide.on ('click', function (){
  $('.box').toggleClass('is-clicked');
});

$btnMove.on ('click', function (){
  $('.diamond').toggleClass('is-clicked2');
});

$btnCollapseExpand.on ('click', function (){
  $('.panel').toggleClass('is-clicked3');
});

$btnBounce.on ('click', function (){
  $('.circle').toggleClass('is-clicked4');
});

$('circle').on('animationend', function (){
  $('.circle').removeClass('is-clicked4');
});

$btnAppend.on('click', function (){
  $('.list').append('<li>New List Item</li>');
});
