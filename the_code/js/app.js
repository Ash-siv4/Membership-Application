import {
  openFile,
  isFileOpened,
  appendToFile,
  exportToFile,
} from "./fileOperations.js";
import { addMember } from "./member.js";
import { printRecords } from "./ui.js";

document.getElementById("addMemberButton").addEventListener("click", () => {
  if (isFileOpened()) {
    addMember();
  } else {
    alert("Please open a data file first.");
  }
});

document.getElementById("printRecordsButton").addEventListener("click", () => {
  if (isFileOpened()) {
    printRecords();
  } else {
    alert("Please open a data file first.");
  }
});

document.getElementById("exportTxtButton").addEventListener("click", () => {
  if (isFileOpened()) {
    exportToFile("txt");
  } else {
    alert("Please open a data file first.");
  }
});

document.getElementById("exportCsvButton").addEventListener("click", () => {
  if (isFileOpened()) {
    exportToFile("csv");
  } else {
    alert("Please open a data file first.");
  }
});

openFile();
