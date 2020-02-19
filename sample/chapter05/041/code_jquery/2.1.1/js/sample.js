// 當window的load事件觸發時，進行下列處理
$(window).on("load", function() {
  // 設定圖片可被選取
  $(document).wrangle({
    // 設定線條顏色
    lineColor : "#f00",
    // 設定線條粗細
    lineWidth : 10
  });
});
