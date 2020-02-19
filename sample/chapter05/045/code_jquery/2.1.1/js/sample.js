$(function(){
  // 以ID名稱為imageList元素中的圖片為對象
  $("#imageList").magnificPopup({
    // 當a元素被點選時就進行處理
    delegate : "a",
    // 將顯示格式設定為圖片（image）
    type : "image"
  });
});