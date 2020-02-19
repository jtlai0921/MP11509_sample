$(function(){
  // 以div元素內的圖片為對象
  $("#photoList img").click(function(){
    // 交互切換圖片的顯示狀態
    $(this).betterToggle();
    // 將目前的元素放入ele
    (function(ele){
      // 經過3秒後再次顯示圖片
      setTimeout(function(){
        // 交互切換圖片的顯示狀態
        $(ele).betterToggle();
      }, 3000);
    })(this);
  });
});