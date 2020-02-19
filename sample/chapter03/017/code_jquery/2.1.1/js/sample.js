$(function(){
  // 於做為容器的myMap中顯示Google地圖
  new Maplace({
    // 指定顯示地圖的容器的ID名稱
    map_div : "#myMap",
    // 將地圖中心設定為台北車站，並將縮放比例設定為15
    locations : [{
      lat : 25.048215,
      lon : 121.517123,
      zoom : 15
    }],
    // 指定地圖的樣式
    styles: {
      // 指定於控制器顯示的文字
      "簡易": [{
        // 以地圖中顯示的所有種類為對象
        featureType: "all",
        // 指定地圖的樣式
        stylers: [
          // 將飽和度設定為-100（無色彩）
          { saturation : -100 },
          // 將Gamma值設定為0.2
          { gamma : 0.2 },
          // 設定為簡易模式
          { visibility: "simplified" }
        ]
      }]
    }
  }).Load(); 
});