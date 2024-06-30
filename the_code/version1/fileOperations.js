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
    alert("7: File not open - (i.e., you haven’t opened it yet)");
  }
}

export function getFileContent() {
  return fileContent;
}
