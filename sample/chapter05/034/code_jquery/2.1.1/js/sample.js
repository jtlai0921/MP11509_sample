$(function(){
  // 替圖片設定hover效果
  $("#myPhoto").adipoli({
    // 指定開始前的特效
    startEffect : "overlay",
    // 指定滑鼠移入時的特效
    hoverEffect : "fold",
    // 特效的播放時間
    animSpeed : 3000,
    // 若套用的是fold特效時，設定垂直的分割數量
    slices : 4,
    // 套用overlay特效時，覆蓋在圖片上的文字
    overlayText : "■■■　御嶽山　■■■"
  });
});