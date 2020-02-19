$(function() {
  // 處理擁有carousel類別的div元素內的圖片
  $(".carousel").jcarousel();
  // 控制按鈕的處理
  $("[data-jcarousel-control]").each(function() {
    var el = $(this);
    el.jcarouselControl(el.data());
  });
});
