$(function(){
  // 以ID名稱為myAlbum的元素內部的img元素為對象
  $("#myAlbum").smoothDivScroll({
    // 設定自動捲動
    autoScrollingMode: "onStart",
    // 設定捲動量
    autoScrollingStep : 1
  });
});