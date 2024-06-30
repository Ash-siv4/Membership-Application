import { getMembers } from "./member.js";

export function printRecords() {
  let members = getMembers();
  const currentDate = new Date().toLocaleDateString();
  let output = `<h2>Member Records</h2>`;
  output += `<p>Page 1</p>`;
  output += `<p>${currentDate}</p>`;
  output += `<table>`;
  output += `<tr>
                <th>Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Join Date</th>
                <th>Type</th>
                <th>Subs</th>
              </tr>`;

  members.forEach((member) => {
    output += `<tr>
                    <td>${member.membershipNumber}</td>
                    <td>${member.firstName}</td>
                    <td>${member.lastName}</td>
                    <td>${member.address}</td>
                    <td>${member.gender}</td>
                    <td>${member.joinDate}</td>
                    <td>${member.membershipType}</td>
                    <td>${member.subscriptionMonth}</td>
                  </tr>`;
  });

  output += `</table>`;
  document.getElementById("output").innerHTML = output;
}
