function doGet() {
  return ContentService
    .createTextOutput('Research data service is ready')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const data = JSON.parse(e.postData.contents);
  const isAttendance = data.eventType === 'attendance';
  const sheet = getOrCreateSheet(
    spreadsheet,
    isAttendance ? 'Attendance' : 'GameScores',
    isAttendance
      ? ['เวลาบันทึก', 'Session ID', 'รหัสนักเรียน', 'เลขที่', 'ชื่อ-สกุล', 'เวลาเช็คชื่อ']
      : ['เวลาบันทึก', 'Session ID', 'รหัสนักเรียน', 'เลขที่', 'ชื่อ-สกุล', 'เกม', 'คะแนน', 'จำนวนข้อ', 'คลิกพลาด']
  );

  if (isAttendance) {
    sheet.appendRow([
      new Date(), data.sessionId || '', data.studentId || '', data.studentNumber || '',
      data.studentName || '', data.attendanceTime || ''
    ]);
  } else {
    sheet.appendRow([
      new Date(), data.sessionId || '', data.studentId || '', data.studentNumber || '',
      data.studentName || '', data.game || '', data.score ?? '',
      data.totalQuestions ?? '', data.mistakes ?? ''
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(spreadsheet, sheetName, headers) {
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow(headers);
  }
  return sheet;
}