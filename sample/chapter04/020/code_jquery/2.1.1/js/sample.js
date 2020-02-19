$(function(){
  // 單純顯示通知訊息
  $.easyNotification({
    // 指定顯示訊息的div元素的ID名稱
    id : "msg",
    // 指定顯示的字串
    text: "顯示通知訊息",
    // 指定發出通知的父元素
    parent: "body",
    // 設定為自動消失
    autoClose : true,
    // 設定消失之前的時間
    duration : 2000,
    // 指定「關閉」按鈕的文字
    closeText : "關閉×"
  });
  // 每3秒透過計時器通知一次
  setInterval(function(){
    // 取得目前的時間
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 通知時間
    $.easyNotification({
      // 指定顯示通知訊息的div元素的ID名稱
      id : "msg",
      // 指定發出通知的父元素
      parent: "body",
      // 指定顯示的字串
      text : h+"時"+m+"分"+s+"秒",
      // 設定為自動消失
      autoClose : true,
      // 指定消失之前的時間
      duration : 2*1000, 
      // 指定「關閉」按鈕的文字
      closeText : "關閉×"
    });
  }, 3*1000);
});