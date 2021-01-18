document.addEventListener("DOMContentLoaded", function(){
  $(".class").animate({opacity: 0}, 2000)
  $(".item").click(function() {
    $("body").prepend("Surprise! ")
  });
})
