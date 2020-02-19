$(function(){
  // 將檢色器嵌入頁面
  $("#mycolorpicker").ColorPicker({
    // 嵌入檢色器
    flat: true,
    // 變更顏色時進行處理
    onChange : function(hsb, hex, rgb){
      // 將選取的顏色設定為背景色
      $("#result").css("background-color", "#"+hex);
    }
  });
});