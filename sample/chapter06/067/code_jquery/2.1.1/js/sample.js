$(function(){
  // 以位於ID名稱immersive_slider內的div元素為對象
  $("#immersive_slider").immersive_slider({
    // 指定滑動方式
    animation : "bounce",
    // 指定代表滑動元素的選擇器
    slideSelector : ".slide",
    // 指定包含整體元素的元素
    container : ".main",
    // 不套用CSS的模糊效果
    cssBlur : false,
    // 在圖片下層顯示頁面
    pagination : true,
    // 循環播放
    loop : true,
    // 指定自動播放之前的時間
    autoStart : 5000
  });
});