$(function(){
  // 在幻燈片模式下顯示特定ID的圖片
  $('#myPhoto').slippry({
    // 自動播放
    auto : true,
    // 將顯示時間設定為4秒
    pause : 4000,
    // 將第一張顯示的圖片設定為第三張圖片
    start : 3,
    // 將畫面切換方式設定為fade
    transition : "fade",
    // 將畫面切換時間設定為500毫秒
    speed : 500
  });
});