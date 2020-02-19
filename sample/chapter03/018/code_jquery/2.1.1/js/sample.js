$(function(){
  $("#myMap").vectorMap({
    // 指定世界地圖的資料
    map: "world_en",
    // 指定背景色
    backgroundColor: "#555555",
    // 指定地圖顏色
    color: "white",
    // 指定滑鼠游標移入時透明層的不透明度
    hoverOpacity: 0.7,
    // 指定滑鼠左鍵點選的區域的顏色
    selectedColor: "green",
    // 不縮放地圖
    enableZoom: false,
    // 不顯示區域的工具提示
    showTooltip: false,
    // 依區域的值指定填色
    values: { jp : 60, cn : 80, us : 100},
    scaleColors: ["#00ffff", "#ff0000", "#0000ff"]
  });
});