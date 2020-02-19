$(function(){
  // 將ID名稱為nav的元素轉換成圓形選單
  $('#nav').ferroMenu({
    // 選單的位置
    position : "left-center",
    // 距離基準位置的邊界
    margin : 50,
    // 選單的半徑
    radius : 80,
    // 選單的旋轉角度
    rotation : 45
  });
});