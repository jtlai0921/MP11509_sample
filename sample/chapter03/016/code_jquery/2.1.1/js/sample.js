$(function(){
  // 於做為容器的myMap中顯示SVG格式的地圖
  $("#myMap").mapael({
    map : {
      // 指定世界地圖資訊的JS檔案
      name : "world_countries",
      // 指定地圖的寬度
      width : 700,
      // 啟用縮放比例按鈕
      zoom : {
        enabled : true
      },
      // 指定地圖整體的顏色
      defaultArea: {
        attrs : {
          stroke : "#999", 
          "stroke-width" : 1,
          fill : "#ccc"
        }
      },
    },
    // 於特定地點顯示●標記符號
    plots : {
      // 設定為台北市台北車站
      shiojiri : {
        // 將圓形的尺寸設定為10
        size : 10,
        // 設定線條顏色與寬度
        attrs : {
          stroke : "#000", 
          "stroke-width" : 1,
          fill : "#f00"
        },
        // 指定台北市台北車站的經緯度
        latitude : 25.048215, 
        longitude : 121.517123,
        // 設定滑鼠移入●時的文字
tooltip: { content : "這裡是台北車站"}
      }
    },
    // 當滑鼠移入台灣區域時顯示的工具提示
    areas: {
TW: { tooltip: { "content": "這裡是台灣" } }
    }
  });
});