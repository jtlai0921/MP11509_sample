$(function(){
  // 對指定的元素進行調整處理
  $("#header").autofix_anything({
    // 設定為畫面捲動至最下方也能維持顯示
    onlyInContainer: false
  });
});