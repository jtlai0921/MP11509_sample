$(function(){
  // 讓CSS的datatable類別の表格支援回應式版面
  $(".datatable").ReStable({
    // 顯示Header
    rowHeaders: true,
    // 將中斷點設定為480px
    maxWidth: 480
  });
});