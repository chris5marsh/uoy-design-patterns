---

title: Filterable tables
name: filterable-tables-module
category: modules
subcategory: Component modules
layout: q+tq
id: filterable-tables-module-page

---

<div class="lead"><p>With big tables of data, it can be helpful to filter them based on their content.</p></div>

By adding a `js-filterable-table` class to the table, the script will automatically add filter boxes above the table. The type of filter will be:

* **text search** - filter the table based on a text input. Add `data-case-sensitive="true"` to witch on case-sensitivity.
* **range** - filter the table based on a range of values. It ignores preceding and following text (e.g pound signs or p.a.).
* **option** - filter the table based on a selected option. Options are gathered from the content in the column.
* **false** - don't add a filter for this column (default)

You can define which columns are to be filtered using a `colgroup`, with each `col` given a `data-` attribute relevant to the filter option. Further options can be assigned to the filter using these `data-` attributes. You can add `span` attributes to the `col` elements to save space.

As with [searchable tables](../js-modules/searchable-tables-module.html), you can choose to ignore the first row of the `tbody` by adding `data-header="true"` to the `table` element.

### Use

```javascript
var m = new FILTERABLE({
  $table: $('#some-table')
});
```

### Example

<div class="c-table-scrollingwrapper">
<table class="js-filterable-table">
  <thead>
    <tr>
      <th data-filterable data-type="text">Course title</th>
      <th data-filterable data-type="select" data-name="Qualification">Qualification earned</th>
      <th data-filterable data-type="select" data-name="Mode">Study mode</th>
      <th>UK/EU</th>
      <th>International</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Archaeological Information Systems</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Archaeological Information Systems</td><td>PG Dip</td><td>Full-time</td><td>£4,830</td><td>£11,360</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>PG Cert</td><td>Full-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>PG Dip</td><td>Full-time</td><td>£4,830</td><td>£11,360</td>
    </tr>
    <tr>
      <td>Bioarchaeology</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Coastal and Marine Archaeology</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Conservation Studies</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Cultural Heritage Management</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>PG Cert</td><td>Full-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Early Prehistory</td><td>MSc</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Field Archaeology</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Historical Archaeology</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Landscape Archaeology</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Medieval Archaeology</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Mesolithic Studies</td><td>MA</td><td>Part-time (36 months)</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Zooarchaeology</td><td>MSc</td><td>Full-time</td><td>£2,580</td><td>£6,060</td>
    </tr>
    <tr>
      <td>Archaeological Information Systems</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Archaeological Information Systems</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Archaeological Research</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Archaeology of Buildings</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Bioarchaeology</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Bioarchaeology</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Bioarchaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Coastal and Marine Archaeology</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Coastal and Marine Archaeology</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Coastal and Marine Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Conservation Studies</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Conservation Studies</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Conservation Studies (Historic Buildings)</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Conservation Studies (Historic Buildings)</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Conservation Studies (Historic Buildings)</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Cultural Heritage Management</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Cultural Heritage Management</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Cultural Heritage Management</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Digital Heritage</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Early Prehistory</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Early Prehistory</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Early Prehistory</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Field Archaeology</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Field Archaeology</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Field Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Historical Archaeology</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Historical Archaeology</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Historical Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Landscape Archaeology</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Landscape Archaeology</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Landscape Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Medieval Archaeology</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Medieval Archaeology</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Medieval Archaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Mesolithic Studies</td><td>MA</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Mesolithic Studies</td><td>MA</td><td>Part-time</td><td>£3,220</td><td>£7,570</td>
    </tr>
    <tr>
      <td>Mesolithic Studies</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Zooarchaeology</td><td>MSc</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
    <tr>
      <td>Zooarchaeology</td><td>MSc</td><td>Part-time</td><td>£3,220</td><td>£7,570</td></td>
    </tr>
    <tr>
      <td>Zooarchaeology</td><td>PG Dip</td><td>Full-time</td><td>£6,450</td><td>£15,150</td>
    </tr>
  </tbody>
</table>
</div>

### Example using accommodation tables

<table class="js-filterable-table">
   <thead>
		<tr>
			<th data-filterable data-type="select">College</th>
			<th data-filterable data-type="select">Bathroom</th>
            <th data-filterable data-type="select">Catering</th>
			<th >Let length</th>
			<th >Price per week</th>
			<th >Price per year</th>
            <th data-filterable data-type="select">Dummy</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-value="James"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/james/">James</a></td>
			<td>Ensuite</td>
			<td>Catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="196">&pound;196</td>
			<td data-value="7840">&pound;7,840</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Alcuin"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/alcuin/">Alcuin</a></td>
			<td>Ensuite</td>
			<td>Self-catered</td>
			<td data-value="50">50 weeks</td>
			<td data-value="155">&pound;155</td>
			<td data-value="7750">&pound;7,750</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Constantine"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/constantine/">Constantine</a></td>
			<td>Ensuite</td>
			<td data-value="Self-catered">Self-catered<br><small>(weekly college meal)</small></td>
			<td data-value="44">44 weeks</td>
			<td data-value="174">&pound;174</td>
			<td data-value="7656">&pound;7,656</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Langwith"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/langwith/">Langwith</a></td>
			<td>Ensuite</td>
			<td data-value="Self-catered">Self-catered<br><small>(weekly college meal)</small></td>
			<td data-value="44">44 weeks</td>
			<td data-value="174">&pound;174</td>
			<td data-value="7656">&pound;7,656</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Halifax"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/halifax/">Halifax</a></td>
			<td>Ensuite</td>
			<td>Self-catered</td>
			<td data-value="44">44 weeks</td>
			<td data-value="169">&pound;169</td>
			<td data-value="7436">&pound;7,436</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="James"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/james/">James</a></td>
			<td>Shared</td>
			<td>Catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="181">&pound;181</td>
			<td data-value="7240">&pound;7,240</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Goodricke"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/goodricke/">Goodricke</a></td>
			<td>Ensuite</td>
			<td data-value="Self-catered">Self-catered<br><small>(weekly college meal)</small></td>
			<td data-value="44">44 weeks</td>
			<td data-value="160">&pound;160</td>
			<td data-value="7040">&pound;7,040</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Constantine"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/constantine/">Constantine</a></td>
			<td>Shared</td>
			<td data-value="Self-catered">Self-catered<br><small>(weekly college meal)</small></td>
			<td data-value="44">44 weeks</td>
			<td data-value="157">&pound;157</td>
			<td data-value="6908">&pound;6,908</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Langwith"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/langwith/">Langwith</a></td>
			<td>Shared</td>
			<td data-value="Self-catered">Self-catered<br><small>(weekly college meal)</small></td>
			<td data-value="44">44 weeks</td>
			<td data-value="157">&pound;157</td>
			<td data-value="6908">&pound;6,908</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Alcuin"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/alcuin/">Alcuin</a></td>
			<td>Ensuite</td>
			<td>Self-catered</td>
			<td data-value="44">44 weeks</td>
			<td data-value="155">&pound;155</td>
			<td data-value="6820">&pound;6,820</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Halifax"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/halifax/">Halifax</a></td>
			<td>Ensuite</td>
			<td>Self-catered</td>
			<td data-value="44">44 weeks</td>
			<td data-value="155">&pound;155</td>
			<td data-value="6820">&pound;6,820</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Derwent"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/derwent/">Derwent</a></td>
			<td>Ensuite</td>
			<td>Catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="168">&pound;168</td>
			<td data-value="6720">&pound;6,720</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Langwith"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/langwith/">Langwith</a></td>
			<td>Shared</td>
			<td data-value="Self-catered">Self-catered<br><small>(weekly college meal)</small></td>
			<td data-value="40">40 weeks</td>
			<td data-value="157">&pound;157</td>
			<td data-value="6280">&pound;6,280</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Alcuin"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/alcuin/">Alcuin</a></td>
			<td>Ensuite</td>
			<td>Self-catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="155">&pound;155</td>
			<td data-value="6200">&pound;6,200</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Vanbrugh"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/vanbrugh/">Vanbrugh</a></td>
			<td>Ensuite</td>
			<td>Self-catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="155">&pound;155</td>
			<td data-value="6200">&pound;6,200</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Derwent"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/derwent/">Derwent</a></td>
			<td>Shared</td>
			<td>Catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="153">&pound;153</td>
			<td data-value="6120">&pound;6,120</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="James"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/james/">James</a></td>
			<td>Shared</td>
			<td>Catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="153">&pound;153</td>
			<td data-value="6120">&pound;6,120</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Vanbrugh"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/vanbrugh/">Vanbrugh</a></td>
			<td>Shared</td>
			<td>Catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="153">&pound;153</td>
			<td data-value="6120">&pound;6,120</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Vanbrugh"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/vanbrugh/">Vanbrugh</a></td>
			<td>Ensuite</td>
			<td>Self-catered</td>
			<td data-value="38">38 weeks</td>
			<td data-value="155">&pound;155</td>
			<td data-value="5890">&pound;5,890</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Goodricke"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/goodricke/">Goodricke</a></td>
			<td>Shared</td>
			<td data-value="Self-catered">Self-catered<br><small>(weekly college meal)</small></td>
			<td data-value="40">40 weeks</td>
			<td data-value="145">&pound;145</td>
			<td data-value="5800">&pound;5,800</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Derwent"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/derwent/">Derwent</a></td>
			<td>Shared</td>
			<td>Self-catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="140">&pound;140</td>
			<td data-value="5600">&pound;5,600</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Halifax"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/halifax/">Halifax</a></td>
			<td>Shared</td>
			<td>Self-catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="140">&pound;140</td>
			<td data-value="5600">&pound;5,600</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Vanbrugh"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/vanbrugh/">Vanbrugh</a></td>
			<td>Shared</td>
			<td>Catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="136">&pound;136</td>
			<td data-value="5440">&pound;5,440</td>
			<td>xyz</td>
		</tr>
		<tr>
			<td data-value="Halifax"><a href="https://www.york.ac.uk/study/accommodation/rooms-prices/halifax/">Halifax</a></td>
			<td>Shared</td>
			<td>Self-catered</td>
			<td data-value="40">40 weeks</td>
			<td data-value="99">&pound;99</td>
			<td data-3960="7656">&pound;3,960</td>
			<td>xyz</td>
		</tr>
	</tbody>
</table>


### Options

 * **table** - a jQuery object, which should be a `table` element. The script automatically parses for tables with the class `.js-filterable-table`.
 * **header** - _Boolean_, whether the first row of the `tbody` should be included.
 * **exclude-cols** - _Array_, Array of column numbers (**not** zero-based) to skip in the search.

Each column can have the options:

* **filter-text** - Filter the column based on a text search
  * **caseSensitive** - _Boolean_, whether the search is case-sensitive.

* **filter-text** - Filter the column based on a text search

