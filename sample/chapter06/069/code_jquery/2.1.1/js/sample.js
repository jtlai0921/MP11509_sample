$(function(){
  // 滑動顯示ID名稱為myAlbum內的圖片
  $("#myAlbum").juicyslider({
    // 指定圖片自動播放的時間
    autoplay : 3000,
    // 指定寬度；將width, height指定為null時，將以全螢幕模式顯示
    width: 384,
    height : 216,
    // 指定遮罩圖片
    mask: "raster"
  });
});