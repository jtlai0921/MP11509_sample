$(function(){
  // 進行幻燈片處理
  $.supersized({
    // 切換成幻燈片模式
    slideshow : 1,
    // 設定自動播放
    autoplay : 1,
    // 指定顯示時間
    slide_interval : 3000,
    // 指定切換方法
    transition : 6,
    // 指定切換時間
    transition_speed : 2000,
    // 依序顯示圖片
    start_slide : 1,
    // 指定幻燈片圖片
    slides : [
      { image : "images/1.jpg" },
      { image : "images/2.jpg" },
      { image : "images/3.jpg" },
      { image : "images/4.jpg" }
    ]
  });
});