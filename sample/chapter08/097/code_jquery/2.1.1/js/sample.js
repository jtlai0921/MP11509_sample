$(function(){
  // 以具有fun類別的元素的文字為對象
  $(".fun").funnyText({
    // 指定特效速度
    speed : 100,
    // 指定文字大小
    fontSize : "3em",
    // 指定套用在文字的特效方向
    direction : "both",
    // 指定文字外框色
    borderColor : "orange",
    // 指定文字顏色
    color : "green",
    // 指定文字外框填色
    activeColor : "#000"
  });
});