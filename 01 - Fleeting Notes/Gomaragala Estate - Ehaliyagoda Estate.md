---
date of purchase: 2018-04-15
value: 5000000
---
# why
Those days I was interested in having a tea plantation

# Date of Purchase
05 April 2018


# Link to the Digital Documents Folder

https://drive.google.com/drive/folders/167a0EbGIkjLxNhLkbhc5AoZZV_l8-m7I?usp=drive_link


# Details of the item/property


| Item                            | description                     |
| ------------------------------- | ------------------------------- |
| Location                        | Ehaliyagoda                     |
| Extent                          | 4 Acres 33 perches              |
| Broker                          | Nimal Ayya                      |
| Lawyer                          | Madushi V Hettige ‭07792 76787‬ |
| Previous Owner's Name           | Pathiranage Premalal Jayalath   |
| Previous Owner's Contact Number | ‭07773 66031‬                   |
| Bank Mortgage Yes/No            | Yes                             |
| If Yes Bank                     | NDB                             |
| if Yes Amount                   | 4,400,000                       |
| if Yes Monthly Committment      | 99,388.00                       |
| if Yes Duration                 | 10 Years                        |
|                                 |                                 |
|                                 |                                 |

# Initial Expenses


| Item             | Cost      |
| ---------------- | --------- |
| Cost of the Item | 5,000,000 |
| Stamp Fees       | 199,000   |
| Legal Fees       |           |

# Funding


| Item | Description |
| ---- | ----------- |
|      | NDB Loan    |


# Significant Early Expenses


| Item | Cost |
| ---- | ---- |
|      |      |

# Recurring Expenses if Any

| Date | Item | Value | References  |
| ---- | ---- | ----- | ----------- |
|      |      |       |             |

Recurrent Incomes rents, harvest

| Date | Item | Value |
| ---- | ---- | ----- |
|      |      |       |



#property 



# Dataview table of properties
```dataviewjs
// JavaScript block for custom formatting with hyperlinks and right-aligned column
dv.table(
    ["Title", "Date of Purchase", "Value"], // Table headers
    dv.pages("#property")
        .filter(p => p["date-of-purchase"] && p.value)
        .sort(p => p["date-of-purchase"], "asc")
        .map(p => [
            p.file.link, // Hyperlinked Title
            p["date-of-purchase"], // Date of Purchase
            `<div style="text-align: right;">${p.value.toLocaleString()}</div>` // Right-aligned Value
        ])
);

```
