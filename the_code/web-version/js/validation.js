export function validateMembershipNumber(membershipNumber) {
  if (!/^\d+$/.test(membershipNumber)) {
    return "1: Membership Number is not numeric";
  }
  if (membershipNumber.length !== 6) {
    return "2: Membership Number is not 6 digits";
  }
  // Implement modulus 11 validation logic here if needed
  return ""; // No error
}

export function validateGender(gender) {
  if (!/^[MFmf]$/.test(gender)) {
    return "4: Gender must be F or M";
  }
  return ""; // No error
}

export function validateJoinDate(joinDate) {
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!dateRegex.test(joinDate)) {
    return "6: Invalid Join Date";
  }
  const parts = joinDate.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are zero-based in JavaScript Date object
  const year = parseInt(parts[2], 10);
  const dateObj = new Date(year, month, day);
  if (
    dateObj.getFullYear() !== year ||
    dateObj.getMonth() !== month ||
    dateObj.getDate() !== day
  ) {
    return "6: Invalid Join Date";
  }
  return ""; // No error
}

export function validateMembershipType(membershipType) {
  if (!/^[FfSsTtBb]$/.test(membershipType)) {
    return "5: Membership type must be F, S, T or B";
  }
  return ""; // No error
}
