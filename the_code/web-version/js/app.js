import { addMember } from "./member.js";
import {
  printRecords,
  exportToTxt,
  exportToCsv,
  handleFileOpen,
} from "./ui.js";

document.getElementById("addMemberButton").addEventListener("click", addMember);
document
  .getElementById("printRecordsButton")
  .addEventListener("click", printRecords);
document
  .getElementById("exportTxtButton")
  .addEventListener("click", exportToTxt);
document
  .getElementById("exportCsvButton")
  .addEventListener("click", exportToCsv);
document
  .getElementById("openFileButton")
  .addEventListener("click", handleFileOpen);
