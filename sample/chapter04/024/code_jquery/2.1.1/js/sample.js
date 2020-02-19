$(function(){
  // 單純顯示通知訊息
  Messenger().post("可輕鬆顯示通知訊息");
  // 指定通知訊息的種類
  Messenger().post({
    message : "每2秒通知一次",
    type : "success"
  });
  // 透過計時器每2秒通知一次
  setInterval(function(){
    // 取得目前時間
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 顯示具有關閉按鈕的通知訊息
    Messenger().post({
      message : h+"時"+m+"分"+s+"秒",
      showCloseButton: true
    });
  }, 2*1000);
});