$(function(){
  // 設定成可縮放
  $("a.zoombox").zoombox({
    // 指定主題
    theme : "lightbox",
    // 指定黑色覆蓋層的不透明度
    opacity : 0.5,
    // 指定特效的處理時間
    duration : 2000,
    // 是否套用動畫特效同時顯示圖片
    animation : true,
    // 指定為相簿模式
    gallery : true
  });
});