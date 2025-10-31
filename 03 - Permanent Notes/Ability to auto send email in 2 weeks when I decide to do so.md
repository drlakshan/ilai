#arogya 
#AI 
#chatGPT 


Persona:

Expert Google Appscript
Javascript


Desired outcome:

When I click a button to send an email with a template stored on specific google doc replacing placeholders with values in cells in the following way

id of the template google doc = "1Ils72X7t962-1Y3ODzaqjtyZcJp58vMusHaQbgFWqDs"

placeholder : value
**[First Name]** = d14 of the current spreadsheet sheet name = "Prescription"

Tasks list:



Step wise breakdown if possible 


Can collections feature of perplexity be of help?


# Output

email creation


```javascript
function sendEmailWithTemplate() {
  // Define the ID of the Google Doc template
  var templateId = "1Ils72X7t962-1Y3ODzaqjtyZcJp58vMusHaQbgFWqDs";
  
  // Get the active spreadsheet and the specified sheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("Prescription");
  
  // Get the value from cell D14
  var firstName = sheet.getRange("D14").getValue();
  
  // Open the Google Doc template
  var templateDoc = DocumentApp.openById(templateId);
  var body = templateDoc.getBody();
  
  // Replace the placeholder with the actual value
  body.replaceText("\\[First Name\\]", firstName);
  
  // Get the content of the modified document as HTML
  var htmlBody = body.getText();
  
  // Define the recipient email address and subject
  var recipient = "recipient@example.com"; // Replace with the actual recipient email
  var subject = "Your Subject Here"; // Replace with the actual subject
  
  // Send the email
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: htmlBody
  });
}

```

trigger

```javascript
function createTimeDrivenTrigger() {
  // Create a time-driven trigger to run the sendEmailWithTemplate function 12 days from now
  ScriptApp.newTrigger('sendEmailWithTemplate')
    .timeBased()
    .at(new Date(Date.now() + 12 * 24 * 60 * 60 * 1000)) // 12 days from now
    .create();
}

```

button click handler

```javascript
function onButtonClick() {
  createTimeDrivenTrigger();
}

```



# References


https://www.perplexity.ai/search/you-are-an-expert-google-appsc-tQGiOm8iRFODfMN3nDXaTw#1


[[Arogya Refinements.canvas|Arogya Refinements]]
