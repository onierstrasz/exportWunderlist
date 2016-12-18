/*
	extract-wunderlist.js -- walk through a wunderlist JSON backup and extract
	the data to present it in a readable from (e.g., suitable to import into Trello)
*/

// Walk through the Wunderlist JSON backup data and sort it into a list of lists of tasks
function collateData(wlist) {
	var lists = wlist.data.lists;
	var tasks = wlist.data.tasks;
	var listData = {"lists":[]};
	var id2list = {};
	for (var i in lists) {
		var list = lists[i];
		var newList = {"title":list.title,"tasks":[],"starred":[]};
		listData.lists.push(newList);
		id2list[list.id] = newList;
	}
	for (var j in tasks) {
		var task = tasks[j];
		// Only add tasks that have not been completed
		if (!task.completed) {
			var title = (task.starred?"* ":"") + task.title;
			id2list[task.list_id][task.starred?"starred":"tasks"].push({"task":title});
		}
	}
	return listData;
}

/*
	The resulting list data looks like this:

	{"lists":[
		{"title":"To do","tasks":[{"task":"go shopping"}],
						"starred":[{"task":"* do todos"}]},
		{"title":"Shopping","tasks":[{"task":"milk"},{"task":"bread"}]}
	]}
*/

// Walk through the collated list data and display it
function displayData(listData) {
	var listDiv = document.getElementById('lists');
	// Clear the last displayed backup or sample
	while(listDiv.firstChild) {
		listDiv.removeChild(listDiv.firstChild);
	}
	var heading = document.createElement('h1');
	var title = document.createTextNode("Lists")
	heading.appendChild(title);
	listDiv.appendChild(heading);
	var lists = listData.lists;
	for (var i = 0, size = lists.length; i < size; i++) {
		var list = lists[i];
		var h2 = document.createElement('h2');
		h2.appendChild(document.createTextNode(list.title));
		listDiv.appendChild(h2);
		var ul = document.createElement('ul');
		// List starred tasks first
		listTasks(ul,list.starred);
		listTasks(ul,list.tasks);
		listDiv.appendChild(ul);
	}
}

function listTasks(ul,tasks) {
	for (var j = 0, tsize = tasks.length; j < tsize; j++) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(tasks[j].task));
		ul.appendChild(li);
	}	
}

// Collate the JSON backup into a simple list of lists of tasks, then display it
function displayWunderlistData(wlist) {
	var listData = collateData(wlist);
	displayData(listData);
}
