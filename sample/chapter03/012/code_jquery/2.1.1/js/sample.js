$(function(){
  // 於做為容器的myMap中顯示Google地圖
  $("#myMap").initMap({
    // 以台灣做為地圖中心，也能直接指定經緯度
    center : "Taiwan",
    // 顯示一般的地圖
    type : "roadmap",
    // 地圖選項
    options : {
      // 縮放比例設定為5
      zoom : 5
    },
    // 顯示地標
    markers: {
      // 指定標記的名稱與選項
      marker_tokyo : {
        // 指定位置，可以指定經緯度
        position : "Taipei"
      }
    }
  });
});