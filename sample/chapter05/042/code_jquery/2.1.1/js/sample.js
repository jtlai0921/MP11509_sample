$(function(){
  // 指定關閉按鈕的URL
  $.facebox.settings.closeImage ="css/closelabel.png";
  // 指定載入圖片的URL
  $.facebox.settings.loadingImage ="css/loading.gif";
  // 以rel屬性將facebox指定為對象
  $("a[rel=facebox]").facebox();
});