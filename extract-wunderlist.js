
// Walk through the Wunderlist JSON backup data and sort it into a list of lists of tasks
function collateData(wlist) {
	var lists = wlist.data.lists;
	var tasks = wlist.data.tasks;
	var listData = {"lists":[]};
	var id2list = {};
	for (var i in lists) {
		var list = lists[i];
		var newList = {"title":list.title,"tasks":[]};
		listData.lists.push(newList);
		id2list[list.id] = newList;
	}
	for (var j in tasks) {
		var task = tasks[j];
		if (!task.completed) {
			id2list[task.list_id].tasks.push({"task":task.title});
		}
	}
	return listData;
}

/*
	The resulting list data looks like this:

	{"lists":[
		{"title":"To do","tasks":[ {"task":"go shopping"},{"task":"do todos"}]},
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
		var tasks = list.tasks;
		for (var j = 0, tsize = tasks.length; j < tsize; j++) {
			var task = tasks[j];
			// NB: only show tasks that have not been completed yet
			if (!task.completed) {
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(task.task));
				ul.appendChild(li);
			}
		}
		listDiv.appendChild(ul);
	}
}

// Collate the JSON backup into a simple list of lists of tasks, then display it
function displayWunderlistData(wlist) {
	var listData = collateData(wlist);
	displayData(listData);
}
