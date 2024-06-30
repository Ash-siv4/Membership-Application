import { openFile, isFileOpened, appendToFile } from "./fileOperations.js";
import { addMember } from "./member.js";
import { printRecords } from "./ui.js";

document.getElementById("addMemberButton").addEventListener("click", () => {
  if (isFileOpened()) {
    addMember();
  } else {
    alert("7: File not open - (i.e., you haven’t opened it yet)");
  }
});

document.getElementById("printRecordsButton").addEventListener("click", () => {
  if (isFileOpened()) {
    printRecords();
  } else {
    alert("7: File not open - (i.e., you haven’t opened it yet)");
  }
});

openFile();
