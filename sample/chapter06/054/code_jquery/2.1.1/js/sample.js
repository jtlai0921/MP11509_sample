$(function(){
  // 以ID名稱為maximage的圖片為對象
  $("#maximage").maximage({
    // 指定幻燈片的選項
    cycleOptions : {
      // 指定特效
      fx : "fade",
      // 指定切換時間
      speed : 3000
    }
  });
});