export function getTodayDate() {
  const today = new Date();
  const weekDay = ["일", "월", "화", "수", "목", "금", "토"];
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = weekDay[today.getDay()];

  return year + "." + month + "." + date + "(" + day + ")";
}
