let fileContent = "";
let fileOpened = false;

export function openFile() {
  // Simulate opening a file (e.g., via file input element in HTML)
  // For demonstration, we'll set a dummy file content
  fileContent =
    "MembershipNumber,FirstName,LastName,Address,Gender,JoinDate,MembershipType,SubscriptionMonth\r\n";
  fileOpened = true;
  console.log("File opened successfully.");
}

export function getFileContent() {
  if (!fileOpened) {
    console.error("File not opened.");
    return "";
  }
  return fileContent;
}

export function appendToFile(data) {
  if (!fileOpened) {
    console.error("File not opened.");
    return;
  }
  fileContent += `${data}\r\n`; // Append data with newline
}

export function isFileOpened() {
  return fileOpened;
}

// Additional export functions for file operations can be added here as needed
