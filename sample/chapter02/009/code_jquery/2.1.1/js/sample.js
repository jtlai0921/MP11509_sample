$(function(){
  // 新增自訂色
  $("#iColor").icolor({
    // 將檢色器嵌入頁面
    flat :  true,
    // 設定為可選取任意色
    showInput : true,
    // 選取顏色之後，將該色設定為div元素的背景色
    onSelect : function(color){
      $("#result").css("background-color", color);
    }
  });
});