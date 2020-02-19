$(function(){
  // 背景的滑動處理
  $.vegas("slideshow", {
    // 指定背景圖片的URL與淡出時間
    backgrounds : [
      { src : "images/1.jpg", fade : 500 },
      { src : "images/2.jpg", fade : 500 },
      { src : "images/3.jpg" },
      { src : "images/4.jpg" }
    ]
  })("overlay", {
    // 指定覆蓋層圖片的URL
    src : "overlays/13.png",
    // 指定覆蓋層圖片的不透明度
    opacity : 0.75
  });
});