```javascript

function searchCalendarEvents() {

// Prompt the user for a search term

var ui = SpreadsheetApp.getUi();

var response = ui.prompt('Search Calendar Events', 'Enter the search term:', ui.ButtonSet.OK_CANCEL);

if (response.getSelectedButton() == ui.Button.OK) {

var searchTerm = response.getResponseText();

// Access the calendar by ID

var calendarId = 'h64m1s4v641i0q8ur9ln7htn48@group.calendar.google.com';

var calendar = CalendarApp.getCalendarById(calendarId);

// Calculate dates for the last 5 years

var now = new Date();

var fiveYearsAgo = new Date(now.getFullYear() - 5, now.getMonth(), now.getDate());

// Get events for the last 5 years

var events = calendar.getEvents(fiveYearsAgo, now);

// Filter events based on the search term

var filteredEvents = events.filter(function(event) {

return event.getTitle().toLowerCase().includes(searchTerm.toLowerCase());

});

// Prepare data for the table

var data = [['Event', 'Date', 'Notes']];

filteredEvents.forEach(function(event) {

data.push([event.getTitle(), event.getStartTime(), event.getDescription()]);

});

// Get the active sheet and clear previous content

var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

sheet.clear();

// Set the data in the sheet

sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

// Format the table headers

var headerRange = sheet.getRange(1, 1, 1, data[0].length);

headerRange.setFontWeight('bold');

headerRange.setBackground('#52489C');

headerRange.setFontColor('white');

headerRange.setHorizontalAlignment('center');

// Format the date column

var dateColumn = sheet.getRange(2, 2, data.length - 1, 1);

dateColumn.setNumberFormat('yyyy-mm-dd hh:mm');

// Set column widths

sheet.setColumnWidths(1, 3, 150);

// Apply borders to the table

var tableRange = sheet.getRange(1, 1, data.length, data[0].length);

tableRange.setBorder(true, true, true, true, true, true);

// Apply alternating row colors

var bandingRange = sheet.getRange(2, 1, data.length - 1, data[0].length);

bandingRange.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);

// Auto-resize columns to fit content

sheet.autoResizeColumns(1, 3);

}

}
```


[[google appscript training class I took quincy]]
