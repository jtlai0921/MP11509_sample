$(function(){
  // 以位於ID名稱為blindify內的img元素為對象
  $("#blindify").blindify({
    // 百葉窗的方向
    orientation : "vertical",
    // 指定百葉窗分割數量
    numberOfBlinds: 20,
    // 指定百葉窗特效的播放速度
    animationSpeed: 2000,
    // 下一張圖片顯示前的時間
    delayBetweenSlides: 500,
    // 長條的上下間距
    gap : 150
        });
});