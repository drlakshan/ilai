---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    isHidden: false
    sortIndex: -1
    width: 278
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      content_alignment: text-align-left
      wrap_content: true
  End_Date:
    input: calendar
    accessorKey: End_Date
    key: End_Date
    id: End_Date
    label: End Date
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Description:
    input: text
    accessorKey: Description
    key: Description
    id: Description
    label: Description
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 185
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
      content_alignment: text-align-left
  Tags:
    input: tags
    accessorKey: Tags
    key: Tags
    id: Tags
    label: Tags
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 197
    options:
      - { label: "workshops", value: "workshops", color: "hsl(54, 95%, 90%)"}
      - { label: "FESS", value: "FESS", color: "hsl(118, 95%, 90%)"}
      - { label: "Oration", value: "Oration", color: "hsl(245, 95%, 90%)"}
      - { label: "Lecture", value: "Lecture", color: "hsl(38, 95%, 90%)"}
      - { label: "Endoscopic Ear Surgery", value: "Endoscopic Ear Surgery", color: "hsl(114, 95%, 90%)"}
      - { label: "CORLHNS", value: "CORLHNS", color: "hsl(256, 95%, 90%)"}
      - { label: "UoK", value: "UoK", color: "hsl(143, 95%, 90%)"}
      - { label: "Medical Students", value: "Medical Students", color: "hsl(174, 95%, 90%)"}
      - { label: "Vertigo", value: "Vertigo", color: "hsl(158, 95%, 90%)"}
      - { label: "SHS", value: "SHS", color: "hsl(306, 95%, 90%)"}
      - { label: "Google Classroom", value: "Google Classroom", color: "hsl(309, 95%, 90%)"}
      - { label: "UCFM", value: "UCFM", color: "hsl(98, 95%, 90%)"}
      - { label: "AI", value: "AI", color: "hsl(166, 95%, 90%)"}
      - { label: "Emergencies and casualties", value: "Emergencies and casualties", color: "hsl(137, 95%, 90%)"}
      - { label: "GP", value: "GP", color: "hsl(71, 95%, 90%)"}
      - { label: "Publication", value: "Publication", color: "hsl(338, 95%, 90%)"}
      - { label: "pgim", value: "pgim", color: "hsl(284, 95%, 90%)"}
      - { label: "obsidian", value: "obsidian", color: "hsl(209, 95%, 90%)"}
      - { label: "Medical Education", value: "Medical Education", color: "hsl(125, 95%, 90%)"}
      - { label: "Panel Discussion", value: "Panel Discussion", color: "hsl(244, 95%, 90%)"}
      - { label: "Symposium", value: "Symposium", color: "hsl(255, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
      content_alignment: text-align-left
      wrap_content: true
  Link_to_Google_Drive:
    input: text
    accessorKey: Link_to_Google_Drive
    key: Link_to_Google_Drive
    id: Link_to_Google_Drive
    label: Link to Obsidian Note
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 201
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
      content_alignment: text-align-left
  URL:
    input: select
    accessorKey: URL
    key: URL
    id: URL
    label: URL
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 279
    options:
      - { label: "https://docs.google.com/presentation/d/14XDtwZ8WBsjA_PUd_eDL8q4VrKtMBiBhNLqXObeFszk/edit#slide=id.g28dc51dcc25_0_36", value: "https://docs.google.com/presentation/d/14XDtwZ8WBsjA_PUd_eDL8q4VrKtMBiBhNLqXObeFszk/edit#slide=id.g28dc51dcc25_0_36", color: "hsl(47, 95%, 90%)"}
      - { label: "https://classroom.google.com/c/MTIyNjQ2ODQ3Njg2", value: "https://classroom.google.com/c/MTIyNjQ2ODQ3Njg2", color: "hsl(209, 95%, 90%)"}
      - { label: "https://docs.google.com/presentation/d/1uzD2Yni5js27IsHS8UI40Ej4wdQTufZxxDUvn6kBkzY/edit#slide=id.SLIDES_API591044289_5", value: "https://docs.google.com/presentation/d/1uzD2Yni5js27IsHS8UI40Ej4wdQTufZxxDUvn6kBkzY/edit#slide=id.SLIDES_API591044289_5", color: "hsl(14, 95%, 90%)"}
      - { label: "https://drive.google.com/drive/folders/1MzktrdlRvzESGA11v0LW5A54NDnX8HFR?usp=sharing", value: "https://drive.google.com/drive/folders/1MzktrdlRvzESGA11v0LW5A54NDnX8HFR?usp=sharing", color: "hsl(347, 95%, 90%)"}
      - { label: "https://drive.google.com/drive/folders/127wTiPHb34O5X3tyfrSjzm2cIYWukNU-?usp=sharing", value: "https://drive.google.com/drive/folders/127wTiPHb34O5X3tyfrSjzm2cIYWukNU-?usp=sharing", color: "hsl(110, 95%, 90%)"}
      - { label: "https://drive.google.com/drive/folders/1ISHbyWfvQ7c4QzXabceJpUztQO3haAB8?usp=drive_link", value: "https://drive.google.com/drive/folders/1ISHbyWfvQ7c4QzXabceJpUztQO3haAB8?usp=drive_link", color: "hsl(318, 95%, 90%)"}
      - { label: "https://drive.google.com/drive/folders/1-Z8JU92YTh0FeB4Erul2GguZU2BLtjyC?usp=drive_link", value: "https://drive.google.com/drive/folders/1-Z8JU92YTh0FeB4Erul2GguZU2BLtjyC?usp=drive_link", color: "hsl(303, 95%, 90%)"}
      - { label: "https://docs.google.com/presentation/d/1hbY453YUYvVIeHg0FzzmpffbH3lVSZ3cw5GVf2L2We8/edit#slide=id.p", value: "https://docs.google.com/presentation/d/1hbY453YUYvVIeHg0FzzmpffbH3lVSZ3cw5GVf2L2We8/edit#slide=id.p", color: "hsl(46, 95%, 90%)"}
      - { label: "https://docs.google.com/presentation/d/1R43bRTHDyD2aQl-R_bMd4RtjFnDEOESP2cCxnrmaq-s/edit?usp=drivesdk", value: "https://docs.google.com/presentation/d/1R43bRTHDyD2aQl-R_bMd4RtjFnDEOESP2cCxnrmaq-s/edit?usp=drivesdk", color: "hsl(28, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Start_Date:
    input: calendar
    accessorKey: Start_Date
    key: Start_Date
    id: Start_Date
    label: Start Date
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: 1
    isSorted: true
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: Database Folder
  current_row_template: 
  pagination_size: 60
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```