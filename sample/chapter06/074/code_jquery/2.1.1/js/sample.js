$(function(){
  // 以rel屬性為prettyPhoto的a元素為對象
  $("a[rel^='prettyPhoto']").prettyPhoto({
    // 自動播放
    autoplay_slideshow : true,
    // 將特效速度設定為500msec
    animation_speed : 500,
    // 指定覆蓋層的不透明度
    opacity : 0.7    
  });
});