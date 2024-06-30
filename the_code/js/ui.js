import { getFileContent } from "./fileOperations.js";

export function printRecords() {
  const fileContent = getFileContent();
  const members = fileContent
    .trim()
    .split("\r\n")
    .map((record) => {
      const fields = record.split("\t");
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
  output += `<p>${currentDate}</p>`;
  output += `<table id="memberTable">`;
  output += `<tr>
                <th>Membership Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Postcode</th>
                <th>Gender</th>
                <th>Join Date</th>
                <th>Membership Type</th>
                <th>Subscription Month</th>
              </tr>`;

  members.forEach((member) => {
    output += `<tr>
                    <td>${member.membershipNumber}</td>
                    <td>${member.firstName}</td>
                    <td>${member.lastName}</td>
                    <td>${member.address}</td>
                    <td>${member.postcode}</td>
                    <td>${member.gender}</td>
                    <td>${member.joinDate}</td>
                    <td>${member.membershipType}</td>
                    <td>${member.subscriptionMonth}</td>
                  </tr>`;
  });

  output += `</table>`;
  output += `<br><button id="exportPdfButton">Export to PDF</button>`;
  document.getElementById("output").innerHTML = output;

  // Export to PDF button event listener
  document.getElementById("exportPdfButton").addEventListener("click", () => {
    exportToPdf();
  });
}

function exportToPdf() {
  const doc = new window.jspdf.jsPDF();
  const table = document.getElementById("memberTable");
  const { x, y, w, h } = table.getBoundingClientRect();

  window.jspdf.autoTable({ html: "#memberTable" });
  doc.save("member_records.pdf");
}
