$(function(){
  // 將背景設定為影片
  $("body").videoBackground("", {
    // 自動播放
    autoplay : "autoplay",
    // 循環播放
    loop : "loop",
    // 設定為靜音
    muted : "muted",
    // 依照視窗尺寸調整影片
    fit : "fill",
    // 指定視訊的URL
    src : "movie/sample.mp4"
  });
});