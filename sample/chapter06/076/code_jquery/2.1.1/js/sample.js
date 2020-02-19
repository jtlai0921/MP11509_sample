$(function(){
  // 以ID名稱為smart元素內部的圖片為對象
  $("#smart").sly({
    itemNav: "centered",
    // 若圖片無法完整榮納於容器裡則捲動畫面
    smart: 1,
    // 以click啟用
    activateOn: "click",
    // 啟用滑鼠拖曳功能
    mouseDragging: 1,
    // 啟用點擊功能
    touchDragging: 1,
    // 拖曳&點擊操作結束時讓圖片搖晃
    releaseSwing: 1,
    // 以滑鼠滾輪捲動畫面
    scrollBy: 1,
    // 指定特效速度
    speed: 300,
    // 進行拖曳與點擊操作時，連畫面外部一併捲動
    elasticBounds: 1,
    // 指定動畫特效種類
    easing: "easeOutExpo"
  });
});