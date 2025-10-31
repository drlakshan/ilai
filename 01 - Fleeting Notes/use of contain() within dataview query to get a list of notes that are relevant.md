#zettelkasten #dataview
#notes


use 

dataview (put triple backticks)


LIST WHERE contains(file.name,"XYZ")

if you want to be case insensitive, I gusess lot of the times you want to be you can use lower()

LIST WHERE contains(lower(file.name),"XYZ")


dataview (put triple backticks)

Also instead of file.name and speech marks, you can use tags

## THIS IS THE MISSING LINK 
use the canvas and get the files searched and populated


e,g: file name

Explore the following code 
```dataview
LIST 
where contains(file.name,"data")
```


e.g. tags
```dataview

LIST
where contains(file.tags, "zett")
```





[[how to use dataview to create zettlekasten type notes]]



```dataview
table file.mtime
limit 25
sort file.ctime Desc
```
