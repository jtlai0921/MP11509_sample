$(window).load(function() {
  // 在指定的元素中執行滑動顯示
  $('#slider').nivoSlider({
    // 指定特效
    effect : "boxRainGrow",
    // 指定顯示時間
    pauseTime : 3000,
    // 指定「Next」字串
    nextText : "下一張",
    // 指定「Prev」字串
    prevText : "前一張",
  });
});