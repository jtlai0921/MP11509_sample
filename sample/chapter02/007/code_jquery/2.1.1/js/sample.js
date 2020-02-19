$(function(){
  // 顯示漸層檢色器
  gradX("#colorpicker" , {
    // 設定為線性漸層
    type : "linear",
    // 設定預設漸層色
    sliders: [
    {  // 設定第一個漸層的位置與顏色
        color: "rgb(255, 0, 0)",
        position: 20
      },
        {  // 設定第二個漸層的位置與顏色
        color: "rgb(255, 255, 0)",
        position: 80
      }
    ],
    change : function(stops, styles){
      // 將設定好的漸層資訊套用至div元素
      $("#result").css("background", styles[0]);
    }
  });
});