$(function(){
  // 讓圖片呈菱形顯示
  $("#imageList").diamonds({
    // 指定圖片的尺寸
    size: 128,
    // 指定圖片與圖片之間的留白
    gap : 2,
    // 指定套用處理的圖片的CSS類別
    itemSelector : ".photo",
    // 即便設定不完整也進行處理
    hideIncompleteRow : false,
    // 視窗重新縮放時重新整理畫面
    autoRedraw : true
  });
});