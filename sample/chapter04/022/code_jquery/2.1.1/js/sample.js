$(function(){
  // 單純顯示通知訊息
  jNotify("可簡單地顯示通知");
  // 透過計時器每1秒顯示一次通知訊息
  setInterval(function(){
    // 取得目前時間
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 顯示時間
    jNotify(
      // 指定顯示的字串
      h+"時"+m+"分"+s+"秒",
      {
        // 指定覆蓋層的顏色
        ColorOverlay : "#ff0",
        // 指定訊息消失之前的顯示時間
        TimeShown : 500
      }
    );
  }, 1000);
});