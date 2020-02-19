$(function(){
  // 確認是否為信用卡的編號格式
  $("#cardNumber").formatter({
    // 確認xxxx-xxxx-xxxx-xxxx格式
    pattern : "{{9999}}-{{9999}}-{{9999}}-{{9999}}",
    // 事先輸入預設字元
    persistent : true
  });
});