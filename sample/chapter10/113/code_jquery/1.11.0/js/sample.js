$(function(){
  // 讓位於指定元素內部的圖片呈立方體旋轉
  $("#myCube").imagecube({
    // 方向隨機決定
    direction : "random",
    // 速度設定為2秒（2000msec）
    speed : 2000,
    // 停止時間設定為3秒（3000msec）
    pause : 3000,
    // 設定重覆旋轉
    repeat : true,
    // 所有旋轉處理結束時呼叫的函數
    afterRotate : function(current, next){
      // 顯示目前圖片與下一張圖片的alt屬性
      $("#result").html(current.alt+"<br>"+next.alt);
    }
  });
});