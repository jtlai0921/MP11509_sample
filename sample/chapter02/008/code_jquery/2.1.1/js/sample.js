$(function(){
  // 新增自訂顏色
  $.fn.colorPicker.addColors([
    "ee0000", "aa0000", "700", "400"
  ]);
  // 將檢色器嵌入頁面
  $("#mycolorpicker").colorPicker();
  // 選取顏色之後（值產生變化時），將該色設定為背景色
  $("#mycolorpicker").change(function(){
    // 讀取於檢色器選取的值
    var col = $(this).val();
    // 將選取的顏色設定為背景色
    $("#result").css("background-color", col);
  });
});