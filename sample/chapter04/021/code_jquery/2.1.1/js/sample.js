$(function(){
  // 單純地顯示通知訊息
  $("#msg").notification({
    type : "information",
    lifeTime : 2000
  });
  // 利用計時器每3秒通知一次
  setInterval(function(){
    // 取得目前的時間
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 通知時間
    $("#msg").notification({
      text : h+"時"+m+"分"+s+"秒",
      // 顯示日期圖示
      type : "date",
      // 指定訊息消失之前的時間
      lifeTime : 15*1000
    });
  }, 3*1000);
});