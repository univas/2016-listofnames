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
        console.log(inputName.value);
        inputName.value = "";
        //we need this to avoid the form submittion to a server
        event.preventDefault();
    }
    
};

//initialization
ListController.init();