$(function(){
  // 裁切CSS類別名稱為myPhoto1中的圖片
  $(".myPhoto1 img").fakecrop();
  // 調整CSS類別名稱為myPhoto2中的圖片
  $(".myPhoto2 img").fakecrop({
    // 調整長寬比，讓圖片收納在矩形範圍內顯示
    fill: false
  });
});