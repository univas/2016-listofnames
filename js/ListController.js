var ListController = {
    
    init: function(params) {
        ListController.setForm();
    },
    
    setForm: function () {
        var form = document.getElementById('form-name');
        form.addEventListener('submit', ListController.handleEventSubmit);
    },
    
    handleEventSubmit: function (event) {
        console.log('Event submit was trigged!');
        var inputName = document.getElementById('name');
        
        ListController.addName(inputName.value);
        
        inputName.value = "";
        //we need this to avoid the form submittion to a server
        event.preventDefault();
    },
    
    addName: function(name) {
        ListService.addName(name);
        //TODO move it to HTMLService.js
        ListController.displayAddedName(name);
    },
    
    //TODO move it to HTMLService.js
    displayAddedName: function(text) {
       var li = ListController.createListItem(text);
       ListController.addToList(li);
    },
    
    //TODO move it to HTMLService.js
    createListItem: function (text) {
        var li = document.createElement('li');
        li.innerHTML = text;
        return li;
    },
    
    //TODO move it to HTMLService.js
    addToList: function (listItem) {
        var ul = document.getElementById('list-name');
        ul.appendChild(listItem);
    }
    
};

//initialization
ListController.init();