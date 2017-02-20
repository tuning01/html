$(function(){
	$(".jquery-1").css("color","blue")
});

var menuHeight = $("#menu-wrap").height();

var startPos = 0;

$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 200) {
      $("#menu-wrap").css("top", "-" + menuHeight + "px");
    }
  } else {
    $("#menu-wrap").css("top", 0 + "px");
  }
  startPos = currentPos;
});
 $(function(){
 $('#navToggle').on('click',function(){
  console.log($('#menu').attr('class'))
  if($('#menu').attr('class')===undefined)
    $('#menu').attr({'class':'active'})
  else
    $('#menu').removeAttr('class')
 });
})