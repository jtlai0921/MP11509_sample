$(function(){
  // 以整張頁面為套用對象
  $("body").ripples({
    // 指定解析度
    resolution: 512,
    // 指定波紋半徑
    dropRadius: 10,
    // 指定波紋隨機程度（高度與強度）
    perturbance: 1.25,
  });
});