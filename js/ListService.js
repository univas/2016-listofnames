var ListService = (function () {

    //private attribute
    var _names = [];

    //private method
    function _loadNames() {
        var namesJsonText = window.localStorage.getItem('list-names');
        if (namesJsonText) {
            _names = JSON.parse(namesJsonText);
        }
    }

    function _saveNames() {
        var namesJsonText = JSON.stringify(_names);
        window.localStorage.setItem('list-names', namesJsonText);
    }

    //public method
    function getList() {
        _loadNames();
        return _names;
    }

    function addName(name) {
        _names.push(name);
        _saveNames();
    }

    //making public method accessable from outside world
    return {
        "getList": getList,
        "addName": addName
    };

})();