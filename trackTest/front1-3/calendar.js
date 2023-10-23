const year = document.getElementById("year");
const month = document.getElementById("month");
let day = document.getElementById("day");

const week = ["日", "月", "火", "水", "木", "金", "土"];

//入力された日付から曜日を計算する関数
function getDayOfWeek(year, month, day) {
  const targetDay = new Date(year, month - 1, day);
  const dayOfWeek = targetDay.getDay();
  return week[dayOfWeek];
}

document.getElementById("make").addEventListener("click", function () {
  //不正な日付が入力された場合の処理
  if (year.value == "" || month.value == "" || day.value == "") {
    alert("正しい日付を入力してください");
    return;
  } else if (day.value > 31) {
    alert("正しい日付を入力してください");
    return;
  } else if (month.value == 2 && day.value > 29) {
    alert("正しい日付を入力してください");
    return;
  } else if (
    (month.value == 4 ||
      month.value == 6 ||
      month.value == 9 ||
      month.value == 11) &&
    day.value > 30
  ) {
    alert("正しい日付を入力してください");
    return;
  } else if (year.value % 4 == 0 && month.value == 2 && day.value > 28) {
    alert("正しい日付を入力してください");
    return;
  } else if (year.value % 4 !== 0 && month.value == 2 && day.value > 27) {
    alert("正しい日付を入力してください");
    return;
  } else if (year.value <= 0 || month.value <= 0 || day.value <= 0) {
    alert("正しい日付を入力してください");
    return;
  } else if (year.value > 9999 || month.value > 12 || day.value > 31) {
    alert("正しい日付を入力してください");
    return;
  } else {
    createCalender(year.value, month.value, day.value);
  }
});

let calendar = document.getElementById("calendar");
let daysOfMonth = document.createElement("tbody");
daysOfMonth.className = "daysOfMonth";

const createCalender = function (year, month, day) {
  daysOfMonth.innerHTML = "";
  let days = createDay(year, month, day);
  console.log(days);
};

const createDay = function (year, month, day) {
  let count = 1;
  let startDayOfWeek = new Date(year, month - 1, 1).getDay();
  let endDate = new Date(year, month, 0).getDate();
  let row = Math.ceil((startDayOfWeek + endDate) / week.length);
  console.log(year, month, day);
  console.log(week[startDayOfWeek], endDate, row);

  for (let i = 0; i < row; i++) {
    let days = document.createElement("tr");
    days.className = "weeklyDates";
    for (let j = 0; j < week.length; j++) {
      if (i == 0 && startDayOfWeek !== 0) {
        let new_element = document.createElement("td");
        new_element.textContent = "";
        days.appendChild(new_element);
        startDayOfWeek--;
      } else if (count <= endDate) {
        let new_element = document.createElement("td");
        new_element.textContent = count;
        days.appendChild(new_element);
        count++;
      }
    }
    console.log(days);
    daysOfMonth.appendChild(days);
    console.log(daysOfMonth);
    calendar.appendChild(daysOfMonth);
    console.log(calendar);
  }
};
