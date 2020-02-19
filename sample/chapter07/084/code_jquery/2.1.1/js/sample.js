$(function(){
  // 設定一開始先折疊長篇文章
  $("#longtext").more({
    // 10個字元為止
    length : 10,
    // 交互切換（toggle）
    toggle : true,
    // 於長篇文章結尾處顯示的字元
    ellipsisText : "》》》",
    // 設定展開文章的字元
    moreText : "繼續閱讀",
    // 設定折疊時的字元
    lessText : "折疊",
    // 展開／折疊時的處理
    onChange : function(expanded){
      // 取得文章狀態
      if (expanded === true){
        // 文章展開時，將背景色設定為橘色
        $("#longtext").css("background-color", "orange")
      }else{
        // 讓背景回復白色
        $("#longtext").css("background-color", "white")
      }
    }
  });
});