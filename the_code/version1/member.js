import {
  validateMembershipNumber,
  validateGender,
  validateJoinDate,
  validateMembershipType,
  validateSubscriptionMonth,
} from "./validation.js";
import { appendToFile } from "./fileOperations.js";

let members = [];

export function addMember() {
  const membershipNumber = document.getElementById("membershipNumber").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address = document.getElementById("address").value;
  const postcode = document.getElementById("postcode").value;
  const gender = document.getElementById("gender").value;
  const joinDate = document.getElementById("joinDate").value;
  const membershipType = document.getElementById("membershipType").value;
  const subscriptionMonth = document.getElementById("subscriptionMonth").value;

  let errorCode = validateMembershipNumber(membershipNumber);
  if (errorCode) {
    alert(`${errorCode}: Membership Number is not valid`);
    return;
  }

  errorCode = validateGender(gender);
  if (errorCode) {
    alert(`${errorCode}: Gender must be F or M`);
    return;
  }

  errorCode = validateJoinDate(joinDate);
  if (errorCode) {
    alert(`${errorCode}: Invalid Join Date`);
    return;
  }

  errorCode = validateMembershipType(membershipType);
  if (errorCode) {
    alert(`${errorCode}: Membership type must be F, S, T or B`);
    return;
  }

  errorCode = validateSubscriptionMonth(subscriptionMonth);
  if (errorCode) {
    alert(`${errorCode}: Subscription month invalid`);
    return;
  }

  const member = {
    membershipNumber,
    firstName,
    lastName,
    address,
    postcode,
    gender,
    joinDate,
    membershipType,
    subscriptionMonth,
  };

  members.push(member);
  alert("Member added successfully");

  // Append to file
  const record = `${membershipNumber}\r\n${firstName}\r\n${lastName}\r\n${address}\r\n${postcode}\r\n${gender}\r\n${joinDate}\r\n${membershipType}\r\n${subscriptionMonth}`;
  appendToFile(record);

  document.getElementById("memberForm").reset();
}

export function getMembers() {
  return members;
}
