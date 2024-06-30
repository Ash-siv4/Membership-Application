let fileOpened = false;

export function openFile() {
  fileOpened = true;
  alert("File opened successfully");
}

export function isFileOpened() {
  return fileOpened;
}
