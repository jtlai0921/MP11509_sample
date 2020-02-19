$(function(){
  // 將ID名稱為myAlbum元素中的a元素視為對象
  $("#myAlbum a").fancyzoom({
    // 指定圖片的資料夾
    imgDir : "./img/",
    // 指定顯示速度
    Speed : 200,
    // 指定覆蓋層的顏色為黃色
    overlayColor : "yellow",
    // 指定覆蓋層的不透明度為70%
    overlay : 0.7
  }); 
});