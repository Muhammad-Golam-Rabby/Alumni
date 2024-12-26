export function convertTo12Hour(time24: string) {
  // Split the time into hours and minutes
  const [hours, minutes] = time24.split(":").map(Number);

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12;

  // Return the formatted time
  return `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;
}
