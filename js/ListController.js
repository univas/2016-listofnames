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
        HTMLService.displayAddedName(name);
    }
    
};

//initialization
ListController.init();