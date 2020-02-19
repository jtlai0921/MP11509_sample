$(function(){
  setInterval(function(){
    // 取得目前的秒數與毫秒
    var dateObj = new Date();
    var sec = dateObj.getSeconds();
    var msec = dateObj.getMilliseconds();
    var timeStr = sec+"."+msec;
    // 將文字（SVG）輸出至指定的元素
    $("#time").sevenSeg({
      // 設定為5位數
      digits : 5,
      // 指定顯示的數值
      value : timeStr,
      // 消失部分的液晶節線顏色
      colorOff : "#003310",
      // 顯示部分的液晶節線顏色
      colorOn : "#22dd22"
    });
  }, 30);
});