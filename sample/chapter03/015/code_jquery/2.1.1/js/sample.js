$(function(){
  // 設定顯示的地圖資訊
  var url = $.staticMap({
    // 地圖上的地址／場所／經緯度
    address: "台灣阿里山",
    // 地圖的寬度
    width: 256,
    height: 256,
    // 地圖的倍率(縮放比例)
    zoom: 9
  });
  // 在ID名稱為myMap的元素中顯示Static Map
  $("#myMap").attr("src", url);
  // 點選地圖後的執行處理
  var urlLive = $.liveMapLink({
    // 於連結位置顯示的地圖地址／場所／經緯度
    address: "台灣阿里山",
    // 地圖倍率（縮放比例）
    zoom: 11
  });
  // 點選地圖之後的連結
  $("#mapURL").attr("href", urlLive);
});