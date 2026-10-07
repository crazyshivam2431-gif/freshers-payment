const STUDENTS = [
  { name: "AYUSH KUMAR DIWAKAR", mobile: "6203761199", enrollment: "A20204126026" },
  { name: "ABHISHIKHA SINGH", mobile: "9784327306", enrollment: "A20204126017" },
  { name: "ASHI SINGH", mobile: "6394196170", enrollment: "A20204126043" },
  { name: "AAMIL JOBY", mobile: "8129728234", enrollment: "A20204126009" },
  { name: "AYUSH LAMBA", mobile: "6367111603", enrollment: "A20204126036" },
  { name: "ASHUTOSH SINGH", mobile: "9905533690", enrollment: "A20204126044" },
  { name: "AJAY KALWANIYA", mobile: "9460458130", enrollment: "A20204126031" },
  { name: "ALOK SHARMA", mobile: "9664411624", enrollment: "A20204126015" },
  { name: "ABHIMANYU SINGH", mobile: "7878895515", enrollment: "A20204126014" },
  { name: "AYUSHI JAIN", mobile: "9351525915", enrollment: "A20204126027" },
  { name: "CHHAVI JAIN", mobile: "8118871180", enrollment: "A20204126018" },
  { name: "DHRUVIKA RATHORE", mobile: "9829148530", enrollment: "A20204126035" },
  { name: "FALGUNI RAGHAV", mobile: "8302220983", enrollment: "A20204126040" },
  { name: "GUNGUN NAHAWAT", mobile: "9365464341", enrollment: "A20204126011" },
  { name: "HIMANSHU SHARMA", mobile: "9929043765", enrollment: "A20204126037" },
  { name: "HIMANSHU SHARMA", mobile: "9928968737", enrollment: "A20204126007" },
  { name: "HARGUN KAUR", mobile: "9663824707", enrollment: "A20204126001" },
  { name: "HARSHITA", mobile: "9996534804", enrollment: "A20204126045" },
  { name: "ISHRAT", mobile: "889034044", enrollment: "A20204126030" },
  { name: "KUNAL JAIN", mobile: "7568102466", enrollment: "A20204126021" },
  { name: "KUNAL VASWANI", mobile: "9799390508", enrollment: "A20204126016" },
  { name: "LAKSHITA BHASKAR", mobile: "8003565181", enrollment: "A20204126033" },
  { name: "MAHAR PATHAN", mobile: "7023090401", enrollment: "A20204126004" },
  { name: "MANDEEP SINGH", mobile: "9462069204", enrollment: "A20204126047" },
  { name: "MOHD AAMIL ASHRAF", mobile: "8235274448", enrollment: "A20204126029" },
  { name: "NIDHI CHOUDHARY", mobile: "7339936191", enrollment: "A20204126025" },
  { name: "NIDHIKA VYAS", mobile: "7976510847", enrollment: "A20204126041" },
  { name: "NIKITA", mobile: "9950462576", enrollment: "A20204126038" },
  { name: "NAISHA BHATIA", mobile: "7665918736", enrollment: "A20204126008" },
  { name: "PAWAN KUMAR KHATANA", mobile: "9664178091", enrollment: "A20204126034" },
  { name: "PARI SURANA", mobile: "9783271141", enrollment: "A20204126020" },
  { name: "PARTH KUMAWAT", mobile: "8302638613", enrollment: "A20204126013" },
  { name: "RIDHIMA NIRMANIYA", mobile: "6350320234", enrollment: "A20204126046" },
  { name: "SHIVAM BINDAL", mobile: "7073415826", enrollment: "A20204126022" },
  { name: "SHOKIN PATIDAR", mobile: "9571611274", enrollment: "A20204126012" },
  { name: "SUJAL BASWAL", mobile: "9057521884", enrollment: "A20204126032" },
  { name: "SHOURYA SINGH RATHORE", mobile: "7297821693", enrollment: "A20204126019" },
  { name: "SHAILJA OJHA", mobile: "9929313416", enrollment: "A20204126023" },
  { name: "SARANSH GARG", mobile: "8107426747", enrollment: "A20204126005" },
  { name: "SIDDHARTH SAJI", mobile: "9778312394", enrollment: "A20204126042" },
  { name: "SHRISHTI YADAV", mobile: "8168958328", enrollment: "A20204126039" },
  { name: "TANVI SINGHAL", mobile: "8287478482", enrollment: "A20204126006" },
  { name: "TANISHA AGARWAL", mobile: "6378988783", enrollment: "A20204126010" },
  { name: "VAIBHAV SHARMA", mobile: "8824814768", enrollment: "A20204126024" },
  { name: "VISHAL SHARMA", mobile: "9549557897", enrollment: "A20204126028" },
  { name: "VEDANG SONI", mobile: "9243714402", enrollment: "A20204126003" },
  { name: "ARYAN YADAV", mobile: "9799428748", enrollment: "A20204126048" },
  { name: "SURYANSH SINGH", mobile: "7665565777", enrollment: "A20204126049" },
  { name: "SHIVANI SHARMA", mobile: "7073694165", enrollment: "A20204126051" },
  { name: "RONIT OJHA", mobile: "8181877877", enrollment: "A20204126052" },
  { name: "PALAK PATEL", mobile: "8770898587", enrollment: "A20204126050" },
  { name: "ADITYA UPADHYAY", mobile: "9329129657", enrollment: "A20204126053" },
  { name: "MUDIT SHARMA", mobile: "9509941392", enrollment: "A20204126054" },
  { name: "RAGHAV SHARMA", mobile: "9119324711", enrollment: "A20204123055" },
  { name: "RAJAT", mobile: "8168115821", enrollment: "A20204126057" },
  { name: "CHARVI PANDEY", mobile: "9079169260", enrollment: "A20204126059" },
  { name: "BALWANT YADAV", mobile: "9928495914", enrollment: "A20204126058" },
  { name: "RAVI KUMAR", mobile: "9660183968", enrollment: "A20204126060" }
];

const STORAGE_KEY = "fresher-payment-records-v1";
const SHEET_ENDPOINT_KEY = "fresher-payment-sheet-endpoint";
const studentMap = new Map(STUDENTS.map((student) => [student.enrollment, student]));

const statsGrid = document.getElementById("statsGrid");
const tableBody = document.getElementById("studentTableBody");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const paymentModal = document.getElementById("paymentModal");
const paymentForm = document.getElementById("paymentForm");
const studentNameInput = document.getElementById("studentName");
const studentMobileInput = document.getElementById("studentMobile");
const studentEnrollmentInput = document.getElementById("studentEnrollment");
const courseInput = document.getElementById("course");
const paymentStudentPrompt = document.getElementById("paymentStudentPrompt");
const paymentStatusInput = document.getElementById("paymentStatus");
const amountPaidInput = document.getElementById("amountPaid");
const paidByInput = document.getElementById("paidBy");
const paidByNameInput = document.getElementById("paidByName");
const paymentDateInput = document.getElementById("paymentDate");
const paymentTimeInput = document.getElementById("paymentTime");
const cashReceivedByInput = document.getElementById("cashReceivedBy");
const confirmCashReceivedInput = document.getElementById("confirmCashReceived");
const cashRemarksInput = document.getElementById("cashRemarks");
const verificationStatusInput = document.getElementById("verificationStatus");
const onlineAppInput = document.getElementById("onlineApp");
const screenshotInput = document.getElementById("screenshot");
const screenshotName = document.getElementById("screenshotName");
const verifiedAtInput = document.getElementById("verifiedAt");
const remarksInput = document.getElementById("remarks");
const paymentHistory = document.getElementById("paymentHistory");
const savePaymentButton = document.getElementById("savePaymentButton");
const sheetEndpointInput = document.getElementById("sheetEndpoint");
const connectionStatus = document.getElementById("connectionStatus");
const toast = document.getElementById("toast");
const cashPaymentDateInput = document.getElementById("cashPaymentDate");

let activeEnrollment = null;
let screenshotData = "";
let toastTimer;

const STATUS_COLORS = {
  Paid: "paid",
  Unpaid: "unpaid",
  "Pending Verification": "pending"
};

function normalizeStatus(value) {
  return value === "Pending Verification" ? value : value === "Paid" ? value : "Unpaid";
}

function readRecords() {
  const records = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  return records.filter((record) => studentMap.has(record.enrollment));
}

function getStoredPayment(enrollment) {
  return readRecords().find((record) => record.enrollment === enrollment) || null;
}

function setStoredPayment(record) {
  const records = readRecords();
  const index = records.findIndex((entry) => entry.enrollment === record.enrollment);
  if (index === -1) records.push(record);
  else records[index] = record;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function showToast(message, type = "success") {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toastTimer = window.setTimeout(() => toast.classList.add("hidden"), 5000);
}

function formatVerifiedAt(value) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("en-IN");
}

function getLocalPaymentDateTime(date = new Date()) {
  return {
    date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
    time: `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`
  };
}

function selectedPaymentMode() {
  return paymentForm.querySelector("input[name='paymentMode']:checked")?.value || "";
}

function getPaymentMode(record) {
  return record && record.paymentMode ? record.paymentMode : "";
}

function buildStudentRow(student) {
  const record = getStoredPayment(student.enrollment);
  const status = normalizeStatus(record?.paymentStatus || "Unpaid");
  const amount = status === "Paid" ? Number(record?.amountPaid || 0) : 0;
  return `
    <tr>
      <td><button class="student-name" type="button" data-enrollment="${student.enrollment}">${student.name}</button></td>
      <td>${student.mobile}</td>
      <td>${student.enrollment}</td>
      <td><span class="badge ${STATUS_COLORS[status]}">${status}</span></td>
      <td class="amount">₹${amount.toLocaleString("en-IN")}</td>
      <td><button class="enter-payment-btn" type="button" data-enrollment="${student.enrollment}">${record ? "UPDATE" : "ENTER"} PAYMENT</button></td>
    </tr>`;
}

function renderStats() {
  const records = readRecords();
  const byEnrollment = new Map(records.map((record) => [record.enrollment, record]));
  const paid = STUDENTS.filter((student) => normalizeStatus(byEnrollment.get(student.enrollment)?.paymentStatus) === "Paid").length;
  const pending = STUDENTS.filter((student) => normalizeStatus(byEnrollment.get(student.enrollment)?.paymentStatus) === "Pending Verification").length;
  const cashPayments = records.filter((record) => record.paymentMode === "Cash" && record.paymentStatus === "Paid").length;
  const onlinePayments = records.filter((record) => record.paymentMode === "Online" && record.paymentStatus === "Paid").length;
  const totalAmount = records.reduce((sum, record) => sum + (record.paymentStatus === "Paid" ? Number(record.amountPaid || 0) : 0), 0);
  const stats = [
    { label: "Total Students", value: STUDENTS.length },
    { label: "Paid", value: paid },
    { label: "Unpaid", value: STUDENTS.length - paid - pending },
    { label: "Pending", value: pending },
    { label: "Cash", value: cashPayments },
    { label: "Online", value: onlinePayments },
    { label: "Total Collection", value: `₹${totalAmount.toLocaleString("en-IN")}` }
  ];
  statsGrid.innerHTML = stats.map((item) => `
    <article class="stat-card">
      <span class="label">${item.label}</span>
      <span class="value">${item.value}</span>
    </article>`).join("");
}

function renderStudents() {
  const query = searchInput.value.trim().toLowerCase();
  const filter = statusFilter.value;
  const filteredStudents = STUDENTS.filter((student) => {
    const record = getStoredPayment(student.enrollment);
    const status = normalizeStatus(record?.paymentStatus || "Unpaid");
    const matchesQuery = !query ||
      student.name.toLowerCase().includes(query) ||
      student.mobile.includes(query) ||
      student.enrollment.toLowerCase().includes(query);
    const matchesFilter = filter === "all" ||
      status === filter ||
      (filter === "Cash" && record?.paymentMode === "Cash") ||
      (filter === "Online" && record?.paymentMode === "Online");
    return matchesQuery && matchesFilter;
  });
  tableBody.innerHTML = filteredStudents.map(buildStudentRow).join("");
}

function renderHistory(record) {
  const entries = record?.history || [];
  if (!entries.length) {
    paymentHistory.textContent = "No previous payment updates.";
    return;
  }
  paymentHistory.innerHTML = `<div class="history-table-wrap"><table class="history-table">
    <thead><tr><th>Updated</th><th>Payment Date</th><th>Amount</th><th>Mode</th><th>Paid By</th><th>Status</th></tr></thead>
    <tbody>${entries.slice().reverse().map((entry) => `<tr>
      <td>${escapeHtml(formatVerifiedAt(entry.lastUpdated))}</td>
      <td>${escapeHtml(entry.paymentDate || "—")} ${escapeHtml(entry.paymentTime || "")}</td>
      <td>₹${Number(entry.amountPaid || 0).toLocaleString("en-IN")}</td>
      <td>${escapeHtml(entry.paymentMode || "—")}</td>
      <td>${escapeHtml(entry.paidByName || "—")}</td>
      <td>${escapeHtml(entry.paymentStatus || "Unpaid")}</td>
    </tr>`).join("")}</tbody>
  </table></div>`;
}

function syncModeFields() {
  const mode = selectedPaymentMode();
  document.querySelectorAll(".online-field").forEach((field) => field.classList.toggle("hidden", mode !== "Online"));
  document.querySelectorAll(".cash-field").forEach((field) => field.classList.toggle("hidden", mode !== "Cash"));
  paymentStatusInput.disabled = mode === "Online";
  if (mode === "Online") updateStatusFromVerification();
  else if (mode === "Cash" && !confirmCashReceivedInput.checked && paymentStatusInput.value === "Paid") {
    paymentStatusInput.value = "Unpaid";
  }
  if (cashPaymentDateInput) cashPaymentDateInput.value = paymentDateInput.value;
}

function updateStudentPayerName() {
  const student = studentMap.get(activeEnrollment);
  if (paidByInput.value === "Student" && student) {
    paidByNameInput.value = student.name;
    paidByNameInput.readOnly = true;
  } else {
    paidByNameInput.readOnly = false;
  }
}

function openPaymentForm(enrollment) {
  activeEnrollment = enrollment;
  const student = studentMap.get(enrollment);
  const record = getStoredPayment(enrollment);
  const now = new Date();
  const defaultDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  studentNameInput.value = student.name;
  studentMobileInput.value = student.mobile;
  studentEnrollmentInput.value = student.enrollment;
  courseInput.value = record?.course || "";
  paymentStudentPrompt.textContent = `Enter or update payment details for ${student.name}.`;
  paymentStatusInput.value = normalizeStatus(record?.paymentStatus || "Unpaid");
  amountPaidInput.value = record?.amountPaid ?? 450;
  paidByInput.value = record?.paidBy || "Student";
  paidByNameInput.value = record?.paidByName || student.name;
  paymentForm.querySelectorAll("input[name='paymentMode']").forEach((radio) => {
    radio.checked = radio.value === (record?.paymentMode || "");
  });
  paymentDateInput.value = record?.paymentDate || defaultDate;
  paymentTimeInput.value = record?.paymentTime || "";
  cashReceivedByInput.value = record?.cashReceivedBy || "";
  confirmCashReceivedInput.checked = record?.paymentMode === "Cash" && record?.paymentStatus === "Paid";
  cashRemarksInput.value = record?.cashRemarks || "";
  verificationStatusInput.value = record?.verificationStatus || "Pending Verification";
  onlineAppInput.value = record?.onlineApp || "";
  screenshotData = record?.screenshot || "";
  screenshotName.textContent = record?.screenshotName || (screenshotData ? "Previously uploaded screenshot retained" : "");
  screenshotInput.value = "";
  verifiedAtInput.value = formatVerifiedAt(record?.verifiedAt) || "";
  remarksInput.value = record?.remarks || "";
  savePaymentButton.textContent = record ? "UPDATE PAYMENT" : "SAVE PAYMENT";
  paymentStudentPrompt.textContent = record
    ? `Existing payment details are loaded for ${student.name}. Edit any fields, then select UPDATE PAYMENT to save your changes.`
    : `Enter payment details for ${student.name}, then select SAVE PAYMENT.`;
  paymentModal.classList.remove("hidden");
  paymentHistory.innerHTML = "";
  renderHistory(record);
  updateStudentPayerName();
  syncModeFields();
}

function closePaymentForm() {
  paymentModal.classList.add("hidden");
  activeEnrollment = null;
}

function updateStatusFromVerification() {
  if (selectedPaymentMode() !== "Online") return;
  if (verificationStatusInput.value === "Verified") paymentStatusInput.value = "Paid";
  else if (verificationStatusInput.value === "Rejected") paymentStatusInput.value = "Unpaid";
  else paymentStatusInput.value = "Pending Verification";
}

function validatePayment(record) {
  if (!record.course) {
    courseInput.setCustomValidity("Select the student's course.");
    courseInput.reportValidity();
    courseInput.setCustomValidity("");
    return false;
  }
  if (record.paymentStatus !== "Paid") return true;
  const required = [
    [record.amountPaid > 0, amountPaidInput, "Enter an amount greater than zero."],
    [Boolean(record.paidBy), paidByInput, "Select who paid the amount."],
    [Boolean(record.paidByName.trim()), paidByNameInput, "Enter the payer name."],
    [Boolean(record.paymentMode), paymentForm.querySelector(".mode-options"), "Select Cash or Online."],
    [Boolean(record.paymentDate), paymentDateInput, "Select the actual payment date."],
    [Boolean(record.paymentTime), paymentTimeInput, "Select the actual payment time."]
  ];
  for (const [valid, element, message] of required) {
    if (!valid) {
      if (element.reportValidity) {
        element.setCustomValidity(message);
        element.reportValidity();
        element.setCustomValidity("");
      } else {
        showToast(message, "error");
      }
      return false;
    }
  }
  if (record.paymentMode === "Cash" && (!record.cashReceivedBy.trim() || !record.cashConfirmed)) {
    showToast("Enter Cash Received By and confirm cash received before marking it Paid.", "error");
    cashReceivedByInput.focus();
    return false;
  }
  if (record.paymentMode === "Online" && record.verificationStatus !== "Verified") {
    showToast("An online payment must be verified before it can be marked Paid.", "error");
    verificationStatusInput.focus();
    return false;
  }
  return true;
}

function readScreenshot(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve({ data: screenshotData, name: screenshotInput.dataset.name || "" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve({ data: String(reader.result), name: file.name });
    reader.onerror = () => reject(new Error("Could not read the selected payment screenshot."));
    reader.readAsDataURL(file);
  });
}

async function syncToGoogleSheet(record) {
  const endpoint = localStorage.getItem(SHEET_ENDPOINT_KEY);
  if (!endpoint) return "local";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action: "upsertPayment", ...record })
  });
  if (!response.ok) throw new Error(`Google Sheets returned HTTP ${response.status}.`);
  return "synced";
}

async function loadPaymentsFromGoogleSheet() {
  const endpoint = localStorage.getItem(SHEET_ENDPOINT_KEY);
  if (!endpoint) return;
  try {
    const url = new URL(endpoint);
    url.searchParams.set("action", "list");
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Google Sheets returned HTTP ${response.status}.`);
    const sheetRecords = await response.json();
    if (!Array.isArray(sheetRecords)) throw new Error("The Sheets endpoint returned an invalid payment list.");
    const localRecords = readRecords();
    const sheetByEnrollment = new Map(sheetRecords.map((record) => [record.enrollment, record]));
    const merged = localRecords.map((localRecord) => {
      const sheetRecord = sheetByEnrollment.get(localRecord.enrollment);
      if (!sheetRecord) return localRecord;
      const localUpdated = new Date(localRecord.lastUpdated || 0).getTime();
      const sheetUpdated = new Date(sheetRecord.lastUpdated || 0).getTime();
      const latest = localUpdated >= sheetUpdated ? localRecord : sheetRecord;
      return {
        ...latest,
        history: localRecord.history || [],
        screenshotName: latest.screenshotName || localRecord.screenshotName || ""
      };
    });
    const localEnrollments = new Set(localRecords.map((record) => record.enrollment));
    sheetRecords.forEach((record) => {
      if (studentMap.has(record.enrollment) && !localEnrollments.has(record.enrollment)) merged.push(record);
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    renderStats();
    renderStudents();
    connectionStatus.textContent = "Google Sheets connected · latest records loaded";
  } catch (error) {
    connectionStatus.textContent = "Could not load Google Sheets · showing local records";
    showToast(`Could not load latest Google Sheets records: ${error.message}`, "error");
  }
}

async function handleFormSubmit(event) {
  event.preventDefault();
  if (!activeEnrollment) return;
  const paidAt = getLocalPaymentDateTime();
  paymentDateInput.value = paidAt.date;
  paymentTimeInput.value = paidAt.time;
  if (cashPaymentDateInput) cashPaymentDateInput.value = paidAt.date;
  const student = studentMap.get(activeEnrollment);
  const mode = selectedPaymentMode();
  const previous = getStoredPayment(activeEnrollment);
  let paymentStatus = paymentStatusInput.value;
  let verificationStatus = mode === "Online" ? verificationStatusInput.value : "";
  if (mode === "Cash" && confirmCashReceivedInput.checked) paymentStatus = "Paid";
  if (mode === "Online") {
    paymentStatus = verificationStatus === "Verified" ? "Paid" :
      verificationStatus === "Rejected" ? "Unpaid" : "Pending Verification";
    paymentStatusInput.value = paymentStatus;
  }
  const record = {
    enrollment: student.enrollment,
    studentName: student.name,
    mobile: student.mobile,
    course: courseInput.value,
    paymentStatus,
    amountPaid: Number(amountPaidInput.value),
    paidBy: paidByInput.value,
    paidByName: paidByNameInput.value.trim(),
    paymentMode: mode,
    paymentDate: paymentDateInput.value,
    paymentTime: paymentTimeInput.value,
    onlineApp: onlineAppInput.value,
    screenshot: screenshotData,
    screenshotName: screenshotName.textContent,
    verificationStatus,
    verifiedAt: previous?.verifiedAt || "",
    cashReceivedBy: cashReceivedByInput.value.trim(),
    cashConfirmed: confirmCashReceivedInput.checked,
    cashPaymentDate: mode === "Cash" ? paymentDateInput.value : "",
    cashRemarks: cashRemarksInput.value.trim(),
    remarks: remarksInput.value.trim(),
    history: previous?.history ? [...previous.history] : [],
    lastUpdated: new Date().toISOString()
  };
  if (!validatePayment(record)) return;
  try {
    const screenshot = await readScreenshot(screenshotInput.files[0]);
    record.screenshot = screenshot.data;
    record.screenshotName = screenshot.name || screenshotName.textContent;
    if (record.paymentStatus === "Paid" && mode === "Online") {
      record.verifiedAt = previous?.verificationStatus === "Verified" && previous?.verifiedAt
        ? previous.verifiedAt
        : new Date().toISOString();
    } else if (record.paymentStatus !== "Paid" || mode !== "Online") {
      record.verifiedAt = "";
    }
    if (previous) {
      const { history, ...previousSnapshot } = previous;
      record.history.push(previousSnapshot);
    }
    setStoredPayment(record);
  } catch (error) {
    showToast(`Unable to save payment locally: ${error.message}`, "error");
    return;
  }
  renderStats();
  renderStudents();
  closePaymentForm();
  try {
    const result = await syncToGoogleSheet(record);
    connectionStatus.textContent = result === "synced" ? "Google Sheets synced" : "Saved locally · Sheets not connected";
    showToast(result === "synced" ? "✓ Payment details saved and synced to Google Sheets." : "✓ Payment details saved locally. Connect Google Sheets to sync this record.");
  } catch (error) {
    connectionStatus.textContent = "Google Sheets sync failed";
    showToast(`Saved locally, but Google Sheets sync failed: ${error.message}`, "error");
  }
}

function saveSheetEndpoint() {
  const endpoint = sheetEndpointInput.value.trim();
  if (!endpoint) {
    localStorage.removeItem(SHEET_ENDPOINT_KEY);
    connectionStatus.textContent = "Local storage only";
    showToast("Google Sheets disconnected. Payment data continues to save in this browser.");
    return;
  }
  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:") throw new Error("Use a secure HTTPS Apps Script endpoint.");
    localStorage.setItem(SHEET_ENDPOINT_KEY, url.href);
    connectionStatus.textContent = "Endpoint saved · ready to sync";
    showToast("Google Sheets endpoint saved. Existing payments are not uploaded automatically.");
  } catch (error) {
    showToast(error.message || "Enter a valid Google Apps Script HTTPS URL.", "error");
  }
}

searchInput.addEventListener("input", renderStudents);
statusFilter.addEventListener("change", renderStudents);
tableBody.addEventListener("click", (event) => {
  const button = event.target.closest(".student-name, .enter-payment-btn");
  if (button) openPaymentForm(button.dataset.enrollment);
});
paymentDateInput.addEventListener("input", () => {
  if (cashPaymentDateInput) cashPaymentDateInput.value = paymentDateInput.value;
});
paymentForm.querySelectorAll("input[name='paymentMode']").forEach((radio) => {
  radio.addEventListener("change", syncModeFields);
});
verificationStatusInput.addEventListener("change", updateStatusFromVerification);
paidByInput.addEventListener("change", updateStudentPayerName);
confirmCashReceivedInput.addEventListener("change", () => {
  if (selectedPaymentMode() === "Cash" && confirmCashReceivedInput.checked) paymentStatusInput.value = "Paid";
  else if (selectedPaymentMode() === "Cash" && paymentStatusInput.value === "Paid") paymentStatusInput.value = "Unpaid";
});
screenshotInput.addEventListener("change", () => {
  screenshotName.textContent = screenshotInput.files[0]?.name || "";
});
paymentForm.addEventListener("submit", handleFormSubmit);
document.querySelectorAll("[data-close='true']").forEach((element) => element.addEventListener("click", closePaymentForm));
document.getElementById("saveSheetEndpoint").addEventListener("click", saveSheetEndpoint);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !paymentModal.classList.contains("hidden")) closePaymentForm();
});

sheetEndpointInput.value = localStorage.getItem(SHEET_ENDPOINT_KEY) || "";
connectionStatus.textContent = sheetEndpointInput.value ? "Endpoint saved · ready to sync" : "Local storage only";
renderStats();
renderStudents();
loadPaymentsFromGoogleSheet();
