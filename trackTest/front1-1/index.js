//入力された1kmのタイムを取得
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
//1kmのタイムを秒に変換
const perKmTime = parseInt(minutes.value) * 60 + parseInt(seconds.value);
//計算ボタンを取得
const calcButton = document.getElementById("calcButton");
//計算結果を表示する要素を取得
const result = document.getElementById("result");

//計算ボタンを押した時の処理
//計算ボタンを押した時の処理
calcButton.onclick = function () {
  // 入力された1kmのタイムを取得
  const minutesValue = parseInt(minutes.value);
  const secondsValue = parseInt(seconds.value);

  // もし入力値が有効でない場合、エラーメッセージを表示するか処理を中断することも考えるべきです
  if (isNaN(minutesValue) || isNaN(secondsValue)) {
    result.textContent = "有効な時間を入力してください";
  } else {
    // 1kmのタイムを秒に変換
    const perKmTime = minutesValue * 60 + secondsValue;
    console.log(perKmTime);

    // フルマラソンのタイムを計算
    const fullMarathonTime = perKmTime * 42.195;
    console.log(fullMarathonTime);

    // fullMarathonTimeを{h}時間{m}分{s}秒の形式に変換
    const h = Math.floor(fullMarathonTime / 3600);
    const m = Math.floor((fullMarathonTime % 3600) / 60);
    //少数代位一位を四捨五入
    const s = Math.round(fullMarathonTime % 60);

    // 計算結果を表示
    result.textContent = `${h}時間${m}分${s}秒`;
  }
};
