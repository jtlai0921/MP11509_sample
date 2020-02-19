$(function(){
  // 單純顯示通知訊息
  $.notifyBar({
    html : "可輕鬆顯示通知訊息"
  });
  // 透過計時器每5秒顯示通知訊息
  setInterval(function(){
    // 取得目前時間
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 顯示時間
    $.notifyBar({
      html : h+"時"+m+"分"+s+"秒",
      // 顯示關閉按鈕
      close: true,
      // 指定關閉按鈕的文字
      closeText : "關閉×"
    });
  }, 5*1000);
});