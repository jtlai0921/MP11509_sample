$(window).load(function(){
  $(".flexslider").flexslider({
    // 動畫方式
    animation : "slide",
    // 循環播放幻燈片
    animationLoop : true,
    // 一張圖片的寬度
    itemWidth : 192,
    // 最小顯示張數
    minItems : 3,
    // 最大顯示張數
    maxItems: 6
  });
});
