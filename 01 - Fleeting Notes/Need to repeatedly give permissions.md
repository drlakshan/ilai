


Function :
As I am duplicating the file with the template on it I will have to repeatedly give authorisation for the scripts that I have created.

To overcome this problem what I need to do is to create a single file for prescribing and get it populated by the desired data do the prescrbing act, email it and carry-out whatever the necessary functions that you like to do on it and save a copy of it for future reference, but keep on coming back to the same page with the script so I don't have to give permissions again and again.

this is the next modification for my project. 




Code :

function populateTemplate() {
  var templateSheet = SpreadsheetApp.openById("TEMPLATE_SHEET_ID").getSheetByName("Sheet1"); // Replace TEMPLATE_SHEET_ID with the ID of your template sheet
  var dataSheet = SpreadsheetApp.openById("DATA_SHEET_ID").getSheetByName("Sheet1"); // Replace DATA_SHEET_ID with the ID of your data sheet
  
  var searchValue = "John"; // Replace with the value you want to search
  
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();
  
  var matchingRows = [];
  
  // Find the rows that match the search value
  for (var i = 0; i < dataValues.length; i++) {
    if (dataValues[i][0] === searchValue) { // Assuming search value is in the first column
      matchingRows.push(dataValues[i]);
    }
  }
  
  if (matchingRows.length > 0) {
    var selectedRow = selectRowFromDialog(matchingRows);
    
    if (selectedRow) {
      // Populate the template sheet with the data
      templateSheet.getRange("A1").setValue(selectedRow[0]); // Assuming the first name is in column A
      templateSheet.getRange("B1").setValue(selectedRow[1]); // Assuming the last name is in column B
      // Populate other fields accordingly
      
      // Print and email the resultant sheet
      var pdf = templateSheet.getAs('application/pdf');
      var emailSubject = "Result Sheet";
      var emailBody = "Please find the attached result sheet.";
      var recipientEmail = "recipient@example.com";
      
      MailApp.sendEmail(recipientEmail, emailSubject, emailBody, {attachments: [{fileName: "ResultSheet.pdf", content: pdf.getContentBytes(), mimeType: "application/pdf"}]});
      
      // Clear the selected row in the data sheet
      var rowIndex = dataValues.findIndex(row => row[0] === selectedRow[0]);
      dataSheet.getRange(rowIndex + 1, 1, 1, selectedRow.length).clearContent();
    }
  }
}

function selectRowFromDialog(rows) {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Select Row', 'Multiple rows found. Please select the row number to proceed:', ui.ButtonSet.OK_CANCEL);
  
  if (response.getSelectedButton() === ui.Button.OK) {
    var rowNumber = parseInt(response.getResponseText());
    
    if (!isNaN(rowNumber) && rowNumber >= 1 && rowNumber <= rows.length) {
      return rows[rowNumber - 1];
    }
  }
  
  return null;
}






Lessons and notes:



#Appscript 