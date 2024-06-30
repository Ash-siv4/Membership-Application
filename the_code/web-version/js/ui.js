import {
  getFileContent,
  isFileOpened,
  openFile,
  appendToFile,
} from "./fileOperations.js";

const outputDiv = document.getElementById("output");

export function printRecords() {
  if (!isFileOpened()) {
    showError("7: File not open - (i.e., you haven’t opened it yet)");
    return;
  }

  const records = getFileContent()
    .split("\r\n")
    .filter((line) => line.trim() !== "");

  let output = `<h2>Member Records</h2>`;
  output += `<table>`;
  output += `<tr><th>Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Gender</th><th>Join Date</th><th>Type</th><th>Subs Month</th></tr>`;

  records.forEach((record, index) => {
    if (index > 0) {
      // Skip the header line
      const fields = record.split(","); // Split record by comma to get fields

      output += `<tr>`;
      fields.forEach((field) => {
        output += `<td>${field}</td>`; // Create a table cell for each field
      });
      output += `</tr>`;
    }
  });
  output += `</table>`;

  outputDiv.innerHTML = output;
}

export function exportToTxt() {
  if (!isFileOpened()) {
    showError("7: File not open - (i.e., you haven’t opened it yet)");
    return;
  }

  const content = getFileContent();

  // Create a Blob from the file content
  const blob = new Blob([content], { type: "text/plain" });

  // Create a link element to trigger the download
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "membership_data.txt";
  link.click();
}

export function exportToCsv() {
  if (!isFileOpened()) {
    showError("7: File not open - (i.e., you haven’t opened it yet)");
    return;
  }

  const content = getFileContent();

  // Create a Blob with CSV format
  const csvContent =
    "data:text/csv;charset=utf-8," + content.replace(/\r\n/g, "\n");
  const encodedUri = encodeURI(csvContent);

  // Create a link element to trigger the download
  const link = document.createElement("a");
  link.href = encodedUri;
  link.download = "membership_data.csv";
  link.click();
}

export function handleFileOpen() {
  openFile();
  showError("File opened successfully.");
}

export function showError(message) {
  outputDiv.innerHTML = `<div class="error">${message}</div>`;
}

export function clearOutput() {
  outputDiv.innerHTML = "";
}
