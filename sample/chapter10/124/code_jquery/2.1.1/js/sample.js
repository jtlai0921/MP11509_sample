$(function(){
  // 按下按鈕就產生QR Code
  $("#make").click(function(){
    // 匯入文字欄位的內容
    var textData = $("#sourceText").val();
    // 刪除已顯示的QR Code
    $("#result").text(" ");
    // 產生QR Code
    $("#result").qrcode({
      // 指定QR Code的尺寸
      size : 128,
      // 指定QR Code的顏色
      fill : "blue",
      // 指定QR Code的內容
      text : textData,
      // 指定模式
      mode : 0
    });
  });
});