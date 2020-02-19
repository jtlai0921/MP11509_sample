$(function(){
  // 將指定的元素轉換成導覽列
  $(".page_container").jumpto({
    // 指定導覽列的標題
    showTitle : "- 目　次 -",
    // 指定導覽列標題的大小
    firstLevel: "> h2",
    secondLevel: "> h3",
    // 指定包裝的CSS類別
    innerWrapper: ".jumpto-block",
    // 顯示關閉按鈕
    closeButton: true,
    // 指定上方的留白
    anchorTopPadding: 20,
  });
});