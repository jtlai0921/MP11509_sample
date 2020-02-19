$(function(){
  // 以CSS的dial類別為對象
  $(".dial").knob({
    // 指定最小值
    min : 0,
    // 指定最大值
    max : 100,
    // 指定間隔
    step : 5,
    // 達最大值、最小值停止事件
    stopper : true,
    // 指定背景色
    bgColor : "black",
    // 指定撥盤色
    fgColor : "#a40",
    // 於撥盤操作中處理
    change : function(val){
      // 顯示值
      $("#result").text(val);
    }
  });
});