$(function(){
  // 將指定的圖片設為背景，以全螢幕模式顯示
  $.backstretch([
    // 列出切換顯示的圖片URL
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
  ], {
    // 將顯示時間設定為4秒
    duration: 3000,
    // 將淡出時間設定為1秒
    fade: 1000
  });
});