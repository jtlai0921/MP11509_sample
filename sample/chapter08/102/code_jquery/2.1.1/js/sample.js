$(function(){
  // 以具有tlt類別的元素的文字為對象
  $(".tlt").textillate({
    // 無限重覆
    loop : true,
    // 自動播放
    autoStart: true,
    // 播放動畫特效的設定
    in : {
      // 指定特效種類
      effect : "rollIn",
      // 非同步移動文字
      sync : false,
      // 動畫特效的時間遞延
      delay: 500
    }
  });
});