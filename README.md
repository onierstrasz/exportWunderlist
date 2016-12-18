# exportWunderlist

Extracts the contents of a JSON backup of your Wunderlist lists and displays them in a readable form. Copy-paste the result into your Trello boards.

Wunderlist provides a way to <a href="https://support.wunderlist.com/customer/en/portal/articles/2364564-can-i-backup-export-my-data-">backup your Wunderlist data</a> as a JSON file, but otherwise no way to export your lists. This project loads the JSON data and walks through it to generate a readable version of your lists.

The JavaScript source code is directly embedded in a <a href="extract-wunderlist.html">HTML web page</a>. To use it, simple clone this repository (or download the zip), and open the HTML file `extract-wunderlist.html`. It will prompt you for the JSON backup file to process.

*Caveats:*

- the order of the tasks is not preserved
- notes and subtasks are not displayed

This project resides at <https://github.com/onierstrasz/exportWunderlist>

---
# JSON entities

The JSON backup contains the following entities:

- list
- task (belongs to list_id)
- note (belongs to task_id)
- task_position
- subtask_position

This project only considers the list and task entities.

# Sample data (extract)

	{"user":5468545,
	"data":
	{
	"lists":[
		{"id":73679355,
			"title":"A sample to do list",
			"list_type":"list",
			"public":false,
			"type":"list"},
		{"id":73679455,
			"title":"A sample shopping list",
			"list_type":"list",
			"public":false,
			"type":"list"}
		],	
	"tasks":[
		{"id":126711949,
			"completed":false,
			"starred":false,
			"list_id":73679355,
			"title":"Code up a Wunderlist exporter",
			"type":"task"},
		{"id":651164079,
			"completed":false,
			"starred":false,
			"list_id":73679355,
			"title":"Go shopping",
			"type":"task"},
		{"id":1548411143,
			"completed":false,
			"starred":false,
			"list_id":73679455,
			"revision":40,
			"title":"Bread",
			"type":"task"},
		{"id":1661803503,
			"completed":false,
			"starred":false,
			"list_id":73679455,
			"revision":11,
			"title":"Milk",
			"type":"task"}
		],	
	"reminders":[],
	"subtasks":[],
	"notes":[],
	"task_positions":[]}}

---

First version by [onierstrasz](https://github.com/onierstrasz) 2016-12-11
