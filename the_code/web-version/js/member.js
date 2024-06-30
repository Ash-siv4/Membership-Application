import {
  validateMembershipNumber,
  validateGender,
  validateJoinDate,
  validateMembershipType,
} from "./validation.js";
import { appendToFile, isFileOpened } from "./fileOperations.js";
import { showError, clearOutput } from "./ui.js";

export function addMember() {
  const membershipNumber = document
    .getElementById("membershipNumber")
    .value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const address = document.getElementById("address").value.trim();
  const postcode = document.getElementById("postcode").value.trim();
  const gender = document.getElementById("gender").value.trim().toUpperCase();
  const joinDate = document.getElementById("joinDate").value.trim();
  const membershipType = document
    .getElementById("membershipType")
    .value.trim()
    .toUpperCase();
  const subscriptionMonth = document
    .getElementById("subscriptionMonth")
    .value.trim();

  const membershipNumberError = validateMembershipNumber(membershipNumber);
  const genderError = validateGender(gender);
  const joinDateError = validateJoinDate(joinDate);
  const membershipTypeError = validateMembershipType(membershipType);

  if (
    membershipNumberError ||
    genderError ||
    joinDateError ||
    membershipTypeError
  ) {
    showError(
      membershipNumberError ||
        genderError ||
        joinDateError ||
        membershipTypeError
    );
    return;
  }

  const memberRecord = `${membershipNumber.padStart(6, "0")} ${firstName.padEnd(
    20,
    " "
  )} ${lastName.padEnd(20, " ")} ${address.padEnd(
    30,
    " "
  )} ${gender} ${joinDate} ${membershipType} ${subscriptionMonth}`;

  if (!isFileOpened()) {
    showError("7: File not open - (i.e., you haven’t opened it yet)");
    return;
  }

  appendToFile(memberRecord);
  clearOutput();
  showError("Member added successfully.");
}
