var links = $('.links');
var selector = $('.links').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = links.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".links").on("click","a",function(e){
  e.preventDefault();
  $('.links a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});