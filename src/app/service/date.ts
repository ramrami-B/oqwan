const TODAY = new Date();
const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

let year = TODAY.getFullYear();
let month = TODAY.getMonth() + 1;
let date = TODAY.getDate();
let yesterdayDate = TODAY.getDate() - 1;
let day = WEEKDAY[TODAY.getDay()];
let yesterdayDay =
  TODAY.getDate() === 0 ? WEEKDAY[6] : WEEKDAY[TODAY.getDay() - 1];

export function getTodayDate() {
  return year + "." + month + "." + date + "(" + day + ")";
}

export function getYesterdayDate() {
  return year + "." + month + "." + yesterdayDate + "(" + yesterdayDay + ")";
}