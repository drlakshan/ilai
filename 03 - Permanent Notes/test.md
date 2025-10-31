```dataviewjs

// Retrieve all pages in the vault let pages = dv.pages(); // Filter pages to include only those with "migraine" in the title or body let migrainePages = pages.filter(p => p.file.name.toLowerCase().includes("migraine") || p.file.content.toLowerCase().includes("migraine") ); // Display the results in a table dv.table(["Title", "Link"], migrainePages.map(p => [p.file.name, p.file.link]));
```
```dataview
LIST WHERE contains(lower(file.name)),"migraine")
```
