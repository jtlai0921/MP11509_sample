$(function(){
  // 依容器大小調整可點選式地圖的對應座標
  $("img[usemap]").rwdImageMaps();
  // 當可點選式地圖被點選時顯示警告訊息對話框
  $("area").on("click", function() {
    // 原封不動顯示alt屬性的內容
    alert($(this).attr("alt"));
  });
});