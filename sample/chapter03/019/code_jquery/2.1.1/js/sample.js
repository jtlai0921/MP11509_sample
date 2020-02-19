$(function(){
  // 將長野縣之外的都道府縣編號存入陣列
  var pref = [];
  for(var i=1; i<=47; i++){
    if(i== 20){ continue; }	// 將長野縣(20號)摒除在外
    pref[i] = i;
  }
  // 顯示日本地圖
  $("#myMap").japanMap({
    // 指定地圖的尺寸
    width : 800,
    height : 600,
    // 指定地圖的背景色
    backgroundColor : "#0000ff",
    // 於地圖左上角顯示西南諸島
    movesIslands : true,
    // 以顏色區分長野縣以及其他都道府縣
    areas : [
        {"code": 1 , "name":"全國", "color":"white", "hoverColor":"orange", "prefectures": pref},
		{"code": 2 , "name":"長野縣",   "color":"red", "hoverColor":"#ffafaf", "prefectures":[20]}
    ]
  });
});