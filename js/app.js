var names = ['Alison', 'Fabiano', 'Luiz', 'Welligton'];

function addAllNames() {
    for (var i = 0; i < names.length; i++) {
        var li = createListItem(names[i]);
        addNameToList(li);
    }
}

function addNameToList(li) {
  var ul = document.getElementById('list-name');
  ul.appendChild(li);
}

function createListItem(name) {
    var li = document.createElement('li');
    li.innerHTML = name;
    return li;
}

//init
addAllNames();