$(function(){
  // 初始化
  $("#startDate").filthypillow();
  // 當焦點移入文字欄位時顯示月曆
  $("#startDate").on("focus", function(){
    $("#startDate").filthypillow("show");
  });
  // 當使用者點選save（儲存）按鈕時的處理
  $("#startDate").on("fp:save", function(evt, dateObj) {
    // 轉換日期格式
    var dateStr = dateObj.format("YYYY/MM/DD hh:mm A");
    // 於文字欄位顯示日期與時間
    $("#startDate").val(dateStr);
    // 隱藏月曆
    $("#startDate").filthypillow("hide");
  });     
});