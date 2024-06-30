let fileOpened = false;
const fileName = "members.txt";
let fileContent = "";

export function openFile() {
  fileOpened = true;
  // Simulate reading an existing file from localStorage
  const storedContent = localStorage.getItem(fileName);
  if (storedContent) {
    fileContent = storedContent;
  } else {
    localStorage.setItem(fileName, "");
  }
  alert("File opened successfully");
}

export function isFileOpened() {
  return fileOpened;
}

export function appendToFile(record) {
  if (fileOpened) {
    fileContent += record + "\r\n";
    localStorage.setItem(fileName, fileContent);
  } else {
    alert("Please open a data file first.");
  }
}

export function exportToFile(format) {
  if (fileOpened) {
    let exportedContent = fileContent;
    if (format === "csv") {
      exportedContent = convertToCsv(fileContent);
    }
    const blob = new Blob([exportedContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `members.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    alert("Please open a data file first.");
  }
}

export function getFileContent() {
  return fileContent;
}

function convertToCsv(text) {
  const rows = text.trim().split("\r\n");
  return rows.map((row) => row.split("\t").join(",")).join("\r\n");
}
