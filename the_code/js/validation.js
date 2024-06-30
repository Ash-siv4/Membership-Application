export function validateMembershipNumber(number) {
  if (isNaN(number)) return 1;
  if (number.length !== 6) return 2;
  if (!modulus11(number)) return 3;
  return 0;
}

function modulus11(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += (6 - i) * parseInt(number[i], 10);
  }
  return sum % 11 === 0;
}

export function validateGender(gender) {
  return /^[FfMm]$/.test(gender) ? 0 : 4;
}

export function validateJoinDate(date) {
  const [day, month, year] = date.split("/").map(Number);
  const joinDate = new Date(year, month - 1, day);
  return joinDate.getDate() === day &&
    joinDate.getMonth() === month - 1 &&
    joinDate.getFullYear() === year
    ? 0
    : 6;
}

export function validateMembershipType(type) {
  return /^[FfSsTtBb]$/.test(type) ? 0 : 5;
}

export function validateSubscriptionMonth(month) {
  const validMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return validMonths.includes(month) ? 0 : 9;
}
