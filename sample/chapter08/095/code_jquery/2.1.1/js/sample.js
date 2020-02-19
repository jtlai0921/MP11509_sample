$(function(){
  // 以指定的CSS類別為調整對象
  $(".responsive").fitText(3, {
    // 將最小字級設定為12pt
    minFontSize: "12pt",
    // 將最大字級設定為64pt
    maxFontSize: "64pt"
  });
});