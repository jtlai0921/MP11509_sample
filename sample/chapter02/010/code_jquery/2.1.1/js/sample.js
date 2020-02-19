$(function(){
  // 將檢色器嵌入頁面
  $("#mycolorpicker").smallColorPicker({
    // 設定預設色
    defaultColor : "pink",
    // 指定檢色器單列的顏色數量
    colorRows : 8,
    // 以陣列指定檢色器可選取的顏色色碼
    colorValues : [  "#000202","#953503","#35381D","#003906",
            "#03316D","#020274","#282AA1","#373737",
            "#7C0200","#F76905","#848000","#037B0D",
            "#008589","#0001FE","#63649D","#7E7E7E",
            "#FE0000","#F7981A","#93CD00","#2D9C69",
            "#21D4CE","#3860FF","#700788","#909090",
            "#F60EE0","#FFC500","#FFFC01","#00FF00",
            "#0CFFFD","#03CBFF","#AB245F","#B9B9B9",
            "#FF8CCE","#FFCB90","#FFFF94","#BFFFC5",
            "#C4FFFF","#92CDFF","#D996FF","#FFFFFF" ]
  });
  // 選取顏色後（值產生變化時）設定背景色
  $("#result").on("click", function(){
    // 讀取在檢色器選取的顏色
    var col = $("#mycolorpicker").val();
    // 將選取的顏色設定為背景色
    $(this).css("background-color", col);
  });
});