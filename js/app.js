var names = ['Alison', 'Fabiano', 'Luiz', 'Welligton'];

function addAllNames() {
    for (var i = 0; i < names.length; i++) {
       addNameToList(names[i]);
    }
}

function setForm() {
    var form = document.getElementById('form-name');
    form.addEventListener('submit', function(e) {
        console.log('Trigged');
        var inputName = document.getElementById('name');
        addNameToList(inputName.value);
        inputName.value = "";
        e.preventDefault();
    });    
}

function addNameToList(name) {
  var li = createListItem(name);
  addToList(li);
}

function addToList(li) {
  var ul = document.getElementById('list-name');
  ul.appendChild(li);
}

function createListItem(name) {
    var li = document.createElement('li');
    li.innerHTML = name;
    return li;
}

//init
setForm();
addAllNames();