# exportWunderlist

Extracts the contents of a JSON backup of your Wunderlist lists and displays them in a readable form. Copy-paste the result into your Trello boards.

Wunderlist provides a way to <a href="https://support.wunderlist.com/customer/en/portal/articles/2364564-can-i-backup-export-my-data-">backup your Wunderlist data</a> as a JSON file, but otherwise no way to export your lists. This project loads the JSON data and walks through it to generate a readable version of your lists.

The JavaScript source code is directly embedded in <a href="extract-wunderlist.html">HTML web page</a>.

*Caveats:*

- the order of the tasks is not preserved
- notes and subtasks are not displayed

# JSON entities

The JSON backup contains the following entities:

- list
- task (belongs to list_id)
- note (belongs to task_id)
- task_position
- subtask_position

This project only considers the list and task entities.

# Sample data (extract)

	{"user":756976,
	"exported":"Sat Nov 12 2016 13:12:01 GMT+0000 (UTC)",
	"data":
	{
	"lists":[
		{"id":73679355,
			"title":"To do",
			"owner_type":"user",
			"owner_id":756976,
			"list_type":"list",
			"public":false,
			"revision":16212981,
			"created_at":"2013-03-28T16:37:57.338Z",
			"type":"list"}
		],	
	"tasks":[
		{"id":126711949,
			"created_at":"2012-12-08T04:30:36.494Z",
			"created_by_id":756976,
			"completed":false,
			"starred":false,
			"list_id":73679355,
			"revision":41642051,
			"title":"derust paper cart",
			"type":"task"}
		{"id":550777956,
			"created_at":"2014-02-23T19:17:13.701Z",
			"created_by_id":1475910,
			"completed":false,
			"starred":false,
			"list_id":73679355,
			"revision":11,
			"title":"Recipe linguine al salmone",
			"type":"task"},
		],
	"reminders":[],
	"subtasks":[],
	"notes":[
		{"id":44753593,
			"revision":2,
			"content":"Pasta with salmon\n\nSmoked salmon\nShallots\nOil,\nbutter\nVodka\nCream\nSalmon eggs or green pepper or chives\nPenne lisce or farfalle\n\n",
			"type":"note",
			"task_id":550777956}
		],
	"task_positions":[
		{"id":73679455,
			"list_id":73679455,
			"revision":1399,
			"values":[2279046091,
		2276786495,
		1344857089],
			"type":"task_position"},
	]}}

---

First version by [onierstrasz](https://github.com/onierstrasz) 2016-12-11
