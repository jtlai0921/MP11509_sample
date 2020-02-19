$(function(){
  // 點選按鈕後，於畫面左側顯示滑動選單
  $("#btn"). sidr({
    // 於左側配置選單
    side : "left",
    // 速度為1秒（2000msec）
    speed : 1000,
    // 選單內容
    name : "myMenu"
  });
});