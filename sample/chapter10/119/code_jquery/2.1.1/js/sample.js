$(function(){
  // 以按鈕點選設定為標準裝飾
  $("#default").click(function(){
    // 無設定選項即為標準裝飾
    $("table tr > :nth-child(3)").tableColorScale();
  });
  // 以按鈕點選顯示數據橫條
  $("#databar").click(function(){
    // type選項指定為databar
    $("table tr > :nth-child(3)").tableColorScale({
      type : "databar",
      // 設定數據橫條顏色
      css : {
        // 設定為淡紅色
        databar : {
          backgroundColor : "rgba(0,128,255,0.75)"
        }
      }
    });
  });
  // 以按鈕點選顯示前三名資料
  $("#up").click(function(){
    // 以topn選項指定
    $("table tr > :nth-child(3)").tableColorScale({
      type : "topn",
      typeOpt : 3
    });
  });
  // 以按鈕點選顯示後三名資料
  $("#down").click(function(){
    // 以topn選項指定
    $("table tr > :nth-child(3)").tableColorScale({
      type : "topn",
      typeOpt : -3
    });
  });
});