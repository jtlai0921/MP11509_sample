$(function(){
  // 於指定元素內顯示文字
  $("#textblock").pagination({
    // 頁面數量
    items : 3,
    // 一次顯示的頁面數量
    itemsOnPage : 1,
    // 一開始顯示的頁面數
    currentPage : 2,
    // 顯示頁面編號的區塊的CSS
    cssStyle: "compact-theme",
    // 於頁面編號使用的ID開頭處附加的文字
    hrefTextPrefix : "#p",
    // 回到前頁按鈕內的文字
    prevText : "回上一頁",
    // 回到下頁按鈕內的文字
    nextText : "往下一頁",
    // 按鈕點選後的處理
    onPageClick : function(num){
      // 隱藏所有頁面區塊
      $(".pageblock").hide();
      // 顯示點選後的頁面
      $("#p"+num).show();
    },
    // 初始化處理
    onInit : function(){
      // 隱藏所有頁面區塊
      $(".pageblock").hide();
      // 顯示currentPage指定的頁面
      $("#p"+(this.currentPage+1)).show();
    }
  });
});