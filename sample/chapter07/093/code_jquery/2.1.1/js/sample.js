$(function(){
  // 設定格狀版面處理
  $("#grid-content").vgrid({
    // 設定淡入處理
    fadeIn: {
      // 單一區塊淡入的時間
      time: 2000,
      // 下個區塊開始淡入的時間
      delay: 500
    }
  });
});