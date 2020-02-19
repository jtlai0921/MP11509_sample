$(function(){
  // 定義資料
  var data = [
    ["A公司", 55], ["B公司", 25], ["C公司", 15], ["其他", 5]
  ];
  // 指定負責繪圖的元素的ID與圖表資料
  jQuery.jqplot("myGraph", [data], { 
    seriesDefaults : {
      // 將圓餅圖指定給渲染器
      renderer : jQuery.jqplot.PieRenderer,
      // 指定繪製選項
      rendererOptions : {
        // 於圓餅圖內繪製標籤
        showDataLabels : true,
        // 分割成派狀
        sliceMargin : 5
      }
    },
    // 顯示圖例
    legend : { show : true, location: "e" }
    }
  );
});