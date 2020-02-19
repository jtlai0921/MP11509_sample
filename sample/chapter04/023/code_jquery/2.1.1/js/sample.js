$(function(){
  // 單純顯示通知訊息
  $().toastmessage("showNoticeToast", "可簡單地顯示通知訊息");
  // 透過計時器每2秒顯示一次通知訊息
  setInterval(function(){
    // 取得目前時間
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 顯示時間
    $().toastmessage("showToast", {
      // 指定訊息種類
      type : "success",
      // 指定顯示的文字
      text : h+"時"+m+"分"+s+"秒",
      // 設定為不黏附在螢幕上
      sticky : false,
      // 顯示時間設定為6秒
      stayTime : 6000,
      // 指定位置
      position : "middle-right"
    });
  }, 2000);
});