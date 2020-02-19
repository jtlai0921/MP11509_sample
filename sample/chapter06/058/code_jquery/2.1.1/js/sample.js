$(function(){
  // 以CSS類別為bxslider的元素為對象
   $(".bxslider").bxSlider({
    // 自動播放
    auto: true,
    // 顯示Start/Stop的控制器
    autoControls: true,
    // 指定自動播放的畫面顯示時間
    pause : 4000
  });
});