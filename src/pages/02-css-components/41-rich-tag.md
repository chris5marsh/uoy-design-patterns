---

title: Rich tags
name: rich-tag
category: components
subcategory: Molecules
layout: q+tq
id: rich-tag-page

---

<div class="lead"><p>**Rich Tags** are a way for you to link multiple pieces of information in a uniform way.</p></div>

<script>
component("rich-tag", {
  "icon": "plane",
  "title": "Award",
  "text": "BSc (Hons)"
});
</script>

If you have a bunch of them, put them in a list:

<script>
component("rich-tag-list", { "atoms": [
  { "rich-tag": {
    "icon": "mortar-board",
    "title": "Creativity",
    "text": "Very creative"
  }},
  { "rich-tag": {
    "icon": "plane",
    "title": "Culture",
    "text": "In spades"
  }},
  { "rich-tag": {
    "icon": "bomb",
    "title": "Environment",
    "text": "Green and healthy"
  }}
]});
</script>

As the rich tags don't have any special styling, you can put any content in them. An icon list with a title works well 
for displaying lots of information.

### Options

#### Atoms

* **rich-tag**
  * **title** - The tag title - recommended
  * **text** - The text under the tag title - optional
  * **icon** - an icon to represent it - optional
  * **content** - other custom content - an icon list would be good.

#### Molecules

* **rich-tag-list**
  * **atoms**: an array of _rich-tags_
