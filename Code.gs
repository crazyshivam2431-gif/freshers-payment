const PAYMENT_HEADERS = [
  "Student Name",
  "Mobile Number",
  "Enrollment Number",
  "Payment Status",
  "Amount Paid",
  "Paid By",
  "Paid By Name",
  "Payment Mode",
  "Payment Date",
  "Payment Time",
  "Online Payment App",
  "Payment Screenshot",
  "Verification Status",
  "Verified At",
  "Cash Received By",
  "Remarks",
  "Last Updated",
  "Cash Remarks",
  "Payment History",
  "Course"
];

const PAYMENT_FIELDS = [
  "studentName",
  "mobile",
  "enrollment",
  "paymentStatus",
  "amountPaid",
  "paidBy",
  "paidByName",
  "paymentMode",
  "paymentDate",
  "paymentTime",
  "onlineApp",
  "screenshot",
  "verificationStatus",
  "verifiedAt",
  "cashReceivedBy",
  "remarks",
  "lastUpdated",
  "cashRemarks",
  "history",
  "course"
];

function doGet(event) {
  const sheet = getPaymentsSheet_();
  const rows = sheet.getDataRange().getValues();
  const records = rows.slice(1)
    .filter((row) => row[2])
    .map((row) => PAYMENT_FIELDS.reduce((record, field, index) => {
      const value = row[index];
      if (field === "history") {
        record[field] = value ? JSON.parse(value) : [];
      } else {
        record[field] = value;
      }
      return record;
    }, {}));
  return ContentService.createTextOutput(JSON.stringify(records))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(event) {
  const payment = JSON.parse(event.postData.contents);
  if (payment.action !== "upsertPayment" || !payment.enrollment) {
    throw new Error("Expected an upsertPayment action with an enrollment number.");
  }
  if (payment.screenshot && payment.screenshot.startsWith("data:image/")) {
    payment.screenshot = saveScreenshot_(payment);
  }
  const sheet = getPaymentsSheet_();
  const lastRow = sheet.getLastRow();
  const enrollments = lastRow > 1
    ? sheet.getRange(2, 3, lastRow - 1, 1).getValues().flat()
    : [];
  const existingIndex = enrollments.findIndex((value) => String(value) === String(payment.enrollment));
  const rowNumber = existingIndex === -1 ? lastRow + 1 : existingIndex + 2;
  const row = PAYMENT_FIELDS.map((field) => {
    if (field === "history") return JSON.stringify(payment.history || []);
    return payment[field] || "";
  });
  sheet.getRange(rowNumber, 1, 1, PAYMENT_HEADERS.length).setValues([row]);
  SpreadsheetApp.flush();
  return ContentService.createTextOutput(JSON.stringify({ ok: true, enrollment: payment.enrollment }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getPaymentsSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName("Payments");
  if (!sheet) sheet = spreadsheet.insertSheet("Payments");
  const currentHeaders = sheet.getRange(1, 1, 1, PAYMENT_HEADERS.length).getValues()[0];
  if (currentHeaders.join("|") !== PAYMENT_HEADERS.join("|")) {
    sheet.getRange(1, 1, 1, PAYMENT_HEADERS.length).setValues([PAYMENT_HEADERS]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function saveScreenshot_(payment) {
  const match = payment.screenshot.match(/^data:(image\/[^;]+);base64,(.+)$/);
  if (!match) throw new Error("The payment screenshot must be a valid image.");
  const bytes = Utilities.base64Decode(match[2]);
  const blob = Utilities.newBlob(bytes, match[1], payment.screenshotName || `${payment.enrollment}-payment`);
  const folderName = "Freshers Payment Screenshots";
  const folders = DriveApp.getFoldersByName(folderName);
  const folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
  return folder.createFile(blob).getUrl();
}
