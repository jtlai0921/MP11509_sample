$(function(){
  // 設定插入文字區域時的處理
  $("#userComment").maxlength({
    // 最多14個字元
    max : 14,
    // 顯示字元的元素
    feedbackTarget : "#textcount",
    // 輸入時的訊息
    feedbackText : "還可以輸入{r}個字元"
  });
});