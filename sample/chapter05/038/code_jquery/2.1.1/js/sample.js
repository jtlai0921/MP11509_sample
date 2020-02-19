$(function(){
  // 設定圖片可以縮放
  $(".easyzoom").easyZoom({
    // 指定匯入時的訊息
    loadingNotice : "匯入中...",
    // 指定匯入失敗時的訊息
    errorNotice : "匯入圖片失敗"
  });
});