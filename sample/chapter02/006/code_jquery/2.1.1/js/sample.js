$(function(){
  // 在頁面中顯示檢色器
  $("#colorpicker").farbtastic("#color");
  // 顏色變更後，設定div元素內的背景色
  $("#setColor").click(function(){
    // 讀取選取的顏色
    var color = $("#color").val();
    // 設定背景色
    $("#result").css("background-color", color);
  });
});