var ListController = (function () {

    //public
    function init() {
        _setForm();
        _displayNames();
    }
    
    //private
    function _setForm() {
        var form = document.getElementById('form-name');
        form.addEventListener('submit', _eventSubmitHandler);
    }
    
    function _eventSubmitHandler() {
        event.preventDefault(); //we need this to avoid the form submittion to a server
        var inputName = document.getElementById('name');
        _addName(inputName.value);
        inputName.value = ""; //clean input name
    }
    
    function _displayNames() {
        var names = ListService.getList();
        names.forEach(HTMLService.displayAddedName);
    }
    
    function _addName(name) {
        ListService.addName(name);
        HTMLService.displayAddedName(name);
    }
    
    //making public method accessable from outside world
    return {
        "init": init
    };
    
})();

//initialization
ListController.init();