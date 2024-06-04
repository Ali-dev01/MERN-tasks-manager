//Get Current Date
const options = { year: "numeric", month: "short", day: "2-digit" };
export const currentDate = new Date().toLocaleDateString(undefined, options);

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const today = new Date();
const currentDay = today.getDay();
const daysToAdd = (currentDay + 6) % 7;
export const currentWeek = [];

for (let i = 0; i < 7; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() - (daysToAdd - i));
  const dayOfWeek = daysOfWeek[(currentDay - daysToAdd + i + 7) % 7];
  const formattedDate = { day: dayOfWeek, date: date.getDate() };
  currentWeek.push(formattedDate);
}
