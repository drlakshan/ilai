```txt
save() {
    local FABRIC_OUTPUT_PATH="/Users/path/to/your/obsidian/folder"
    local filename="$1"

    if [[ -z "$filename" ]]; then
        echo "Usage: <comando> | save <filename>"
        echo "Example: yt --transcript URL | fabric -p PATTERN | save extract_wisdom"
        return 1
    fi

    local full_filename="${FABRIC_OUTPUT_PATH}/${filename}.md"
    
    tee -a "$full_filename"
    
    echo "Output saved in $full_filename"
}
```


[[fabric usecases - a great ai tool - may be the best way I am going to use ai]]
