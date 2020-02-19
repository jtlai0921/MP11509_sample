$(function(){
  // 單純顯示通知
  noty({
    text : "可輕鬆顯示通知",
    layout : "topCenter"
  });
  // 透過計時器每2秒顯示通知一次
  setInterval(function(){
    // 取得目前時間
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 顯示通知
    noty({
      text : h+"時"+m+"分"+s+"秒",
      // 於畫面上半部中央處顯示
      layout : "topCenter",
      // 最多顯示4筆通知
      maxVisible : 4,
      // 讓通知於6秒後消失
      timeout : 6000
    });
  }, 2*1000);
});