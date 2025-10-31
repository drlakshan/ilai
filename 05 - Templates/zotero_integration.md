---
Publish Year: '{{date | format("YYYY")}}'
Authors: "{{authors}}{{directors}}"
URL: "{{url}}"
Zotero Link: "{{desktopURI}}"
---
Title: zotero_integration test
Authors: {{authors}}

Date Added: {{dateAdded}}

PDF link: {{pdfLink}}
PDF ZoteroLink: {{pdfZoteroLink}}

Annotations: {{formattedAnnotations}}
Notes:{{markdownNotes}}
# Summary

## Purpose

  

## Methods

  

## Key Findings

  

## Discussion

  

## Critiques

  

# Annotations

{% for annotation in annotations -%}

  

    {%- if annotation.annotatedText -%}

  

    {{annotation.annotatedText}}”{% if annotation.color %} {{annotation.colorCategory}} {{annotation.type | capitalize}} {% else %} {{annotation.type | capitalize}} {% endif %}[Page {{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}})

  

    {%- endif %}

  

    {%- if annotation.imageRelativePath -%}

  

    ![[{{annotation.imageRelativePath}}]] {%- endif %}

  

{% if annotation.comment %}

  

{{annotation.comment}}

  

{% endif %}

  

{% endfor -%}