$(function(){
  // 設定內容選單
  $.contextMenu({
    // 指定選擇器
    selector: ".myMenu", 
    // 指定選單被選取時的整體的Callback函數
    callback: function(key, options) {
      // 於畫面顯示內容選單
                $("#result").html(key+"<br>"+options.ns);
          },
    // 指定選單項目
    items: {
                "file": {name: "檔案", icon: "file"},
                "edit": {name: "編輯", icon: "edit"},
      // ---顯示為分割線
                "separator": "---------",
      // 為結束項目指定其他的Callback函數
      "quit": {name: "結束", callback:function(key, options){
        $("#result").html("點選了結束選項");
      }}
          }
      });
});