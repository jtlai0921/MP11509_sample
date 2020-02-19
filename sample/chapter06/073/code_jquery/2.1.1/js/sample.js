$(function(){
  // 以ID名稱為gallery的元素內部的a元素為對象
  $("#gallery").photobox("a", {
    // 自動播放
    autoplay : true,
    // 循環播放
    loop : true,
    // 指定播放時間
    time : 4000
  });
});