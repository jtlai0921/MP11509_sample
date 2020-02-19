$(function(){
  // 以myPhoto類別為對象個別顯示
  $('a.myPhoto').colorbox();
  // 以myGroup1類別為對象群組顯示
  $('a.myGroup1').colorbox({
    rel : "myGroup1"
  });
  // 以myGroup2類別為對象群組顯示
  $('a.myGroup2').colorbox({
    rel : "myGroup2"
  });
});