$(function(){
  // 匯入主題檔案（JS/CSS）
  Galleria.loadTheme("themes/classic/galleria.classic.min.js");
  // 播放幻燈片
  Galleria.run(".galleria", {
    // 自動播放
    autoplay: true,
    // 指定圖片切換效果
    transition : "fadeslide",
    // 指定第一張圖片的切換效果
    initialTransition : "slide"
  });
});