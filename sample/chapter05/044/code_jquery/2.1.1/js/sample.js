$(function(){
  // 設定點選圖片就進行處理
  $(".least-gallery").least({
    // 是否以隨機的順序顯示縮圖
    random : false,
    // 圖片若無法於單張頁面顯示，是否允許捲動頁面
    scrollToGallery : true,
    // 是否顯示可支援高解析度裝置的圖片（'@2x'圖片）
    HiDPI : false
  });
});