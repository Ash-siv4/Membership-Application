import { getFileContent } from "./fileOperations.js";

export function printRecords() {
  const fileContent = getFileContent();
  const members = fileContent
    .trim()
    .split("\r\n\r\n")
    .map((record) => {
      const fields = record.split("\r\n");
      return {
        membershipNumber: fields[0],
        firstName: fields[1],
        lastName: fields[2],
        address: fields[3],
        postcode: fields[4],
        gender: fields[5],
        joinDate: fields[6],
        membershipType: fields[7],
        subscriptionMonth: fields[8],
      };
    });

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
