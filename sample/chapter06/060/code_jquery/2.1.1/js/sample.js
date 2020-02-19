$(function(){
  // 以CSS類別為fancybox的元素為對象
  $(".fancybox").fancybox({
    // 自動播放
    autoPlay : true,
    // 循環播放
    loop : true,
    // 進階設定
    helpers    : {
      // 設定圖片說明的位置
      title  : { type : "float" }
    }
  });
});