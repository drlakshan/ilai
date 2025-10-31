
```dataview
TABLE dateformat(file.mtime, "dd.MM.yyyy - HH:mm") AS "Last modified"
WHERE type = "journal"
SORT file.mtime DESC
```
