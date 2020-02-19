// 頁面初始化之際執行處理
$(document).delegate("#home", "pageinit", function() {
  // 以位於ID名稱為myAlbum元素內部的a元素為對象
  $("#myAlbum").imageflip();
});
