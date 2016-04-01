var $box = $('.box');
var $boxshowhide = $('.btn-show-hide');
var $diamond = $('.diamond');
var $diamondmove = $('.btn-move');
var $panel = $('.panel');
var $panelcollapse = $('.btn-collapse-expand');
var $circle = $('.circle');
var $circlebounce = $('.btn-bounce');
var $list = $('.list');
var $listappend = $('.btn-append');

$boxshowhide.on('click', function() {
  $box.toggleClass('boxshowhide');
});

$diamondmove.on('click', function() {
  $diamond.toggleClass('diamondmove');
});

$panelcollapse.on('click', function() {
  $panel.toggleClass('panelcollapse');
});

$circlebounce.on('click', function() {
  $circle.addClass('circlebounce');
}); // animationend & removeClass

$listappend.on('click', function() {
  $list.addClass('listappend');
});
