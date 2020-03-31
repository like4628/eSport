$(window).scroll(function(evt) {
  if ($(window).scrollTop() > 0) {
    $(".navbar").removeClass("navbar-top");
  } else {
    $(".navbar").addClass("navbar-top");
  }
});

if ($(window).width() > 768) {
  var s = skrollr.init();
}

//泡泡特效
function bubbles() {
  $.each($(".particletext.bubbles"), function() {
    var bubblecount = ($(this).width() / 50) * 10;
    for (var i = 0; i <= bubblecount; i++) {
      var size = $.rnd(40, 80) / 10;
      //这里的animation-delay很重要，关系到你的特效是否看上去是连续无断层的，上一步中css是18秒，所以这一步中延迟时间就设置成$.rnd(0,180)/10)
      $(this).append(
        '<span class="particle" style="top:' +
          $.rnd(20, 80) +
          "%; left:" +
          $.rnd(0, 95) +
          "%;width:" +
          size +
          "px; height:" +
          size +
          "px;animation-delay: " +
          $.rnd(0, 180) / 10 +
          's;"></span>'
      );
    }
  });
}
jQuery.rnd = function(m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
};
bubbles();

$(".btn_click").click(function() {
  alert("恭喜你訂閱我，但是這是做好玩的，不要揍我(ಥ﹏ಥ)");
});
