/*function volgendeFoto() {
    if ($('.afb1').hasClass('selected')) {
      $('.afb1').fadeOut(1000, function() {
        $('.afb1').removeClass('selected');
        $('.afb2').fadeIn(1000, function () {
          $('.afb2').addClass('selected');
          
        });
      });
    }
    else if ($('.afb2').hasClass('selected')) {
       $('.afb2').fadeOut(1000, function() {
        $('.afb2').removeClass('selected');
        $('.afb3').fadeIn(1000, function () {
          $('.afb3').addClass('selected');
          
        });
      });
    }
    else {
       $('.afb3').fadeOut(1000, function() {
        $('.afb3').removeClass('selected');
        $('.afb1').fadeIn(1000, function () {
          $('.afb1').addClass('selected');
          
        });
      });
    }

  };

var main = function () {
  $('.play').on('click', function() {
  setInterval(volgendeFoto, 5000);
    $('.play').css("display","none");
  });
}

$("document").ready(main);*/
 
$(function volgendeFoto(){
    $('.shoot img:gt(0)').hide();
    setInterval(function(){
      $('.shoot :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.shoot');}, 
      5000);
});
var main = function () {
  $('.play').on('click', function() {
  setInterval(volgendeFoto, 5000);
    $('.play').css("display","none");
  });
}
$("document").ready(main);