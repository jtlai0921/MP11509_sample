$(function(){
  // 沿曲線配置特定元素內的文字
  $("#content").circleType({
    // 指定圓的半徑
    radius : 400,
    // 以75%的比例沿曲線配置
    dir : 0.75,
    // 依照圓形的變形量重新計算文字的位置
    fluid : true
  });
});