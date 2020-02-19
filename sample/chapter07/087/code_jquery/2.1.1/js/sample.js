$(function(){
  // 以CSS的lazy類別為對象
  $(".lazy").onScreen({
    // 淡入顯示
    doIn: function() {
      $(this).animate({
        "opacity" : 1.0
      }, 2000);
    },
    // 淡出
    doOut: function() {
      $(this).animate({
        "opacity" : 0.15
      }, 2000);
    }
  });
});