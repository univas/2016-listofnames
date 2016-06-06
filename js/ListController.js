var ListController = {
    
    init: function(params) {
        ListController.setForm();
        ListController.displayNames();
    },
    
    setForm: function () {
        var form = document.getElementById('form-name');
        form.addEventListener('submit', ListController.eventSubmitHandler);
    },
    
    eventSubmitHandler: function (event) {
        console.log('Event submit was trigged!');
        var inputName = document.getElementById('name');
        
        ListController.addName(inputName.value);
        
        inputName.value = "";
        event.preventDefault(); //we need this to avoid the form submittion to a server
    },
    
    displayNames: function() {
        var names = ListService.getList();
        names.forEach(HTMLService.displayAddedName);
    },
    
    addName: function(name) {
        ListService.addName(name);
        HTMLService.displayAddedName(name);
    }
    
};

//initialization
ListController.init();