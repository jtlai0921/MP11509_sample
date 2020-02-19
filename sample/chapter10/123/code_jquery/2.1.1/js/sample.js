$(function(){
  // 將文字欄位的內容儲存至Cookie
  $("#save").click(function(){
    // 讀取文字欄位的內容
    var text = $("#userComment").val();
    // 儲存於Cookie
    $.cookie("myData", escape(text), { expires : 7 });
    // 顯示結果
    $("#result").text("內容儲存至Cookie了");
  });
  // 匯入儲存於Cookie的內容再顯示
  $("#load").click(function(){
    // 讀取文字欄位的內容
    var text = $.cookie("myData");
    // 顯示結果
    $("#result").text(unescape(text));
  });
});