export default function getDateToday() {
  const today = new Date();

  // Slices to ensure the month/day is always in 2 digit format
  const dd = ("0" + today.getDate()).slice(-2);
  const mm = ("0" + (today.getMonth() + 1)).slice(-2); //January is 0!
  const yyyy = today.getFullYear();

  // DefaultValue (Date Component of Material UI) requires this specific date format otherwise won't  recognise/accept
  return `${yyyy}-${mm}-${dd}`;
}
