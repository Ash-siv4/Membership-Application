import { getMembers } from "./member.js";

export function printRecords() {
  let members = getMembers();
  let output = "Member Records\nPage Z9\n\n";
  output +=
    "Number    First    Last    Address    Gender    Join Date    Type    Subs\n";
  members.forEach((member, index) => {
    output += `${member.membershipNumber} ${member.firstName} ${member.lastName} ${member.address} ${member.gender} ${member.joinDate} ${member.membershipType} ${member.subscriptionMonth}\n`;
  });

  document.getElementById("output").textContent = output;
}
