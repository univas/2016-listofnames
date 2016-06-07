var HTMLService = (function () {

    //private
    function _createListItem(text) {
        var listItem = document.createElement('li');
        listItem.innerHTML = text;
        return listItem;
    }

    function _addToList(listItem) {
        var ul = document.getElementById('list-name');
        ul.appendChild(listItem);
    }

    //public
    function displayAddedName(name) {
        var listItem = _createListItem(name);
        _addToList(listItem);
    }
    
    //making public method accessable from outside world
    return {
        "displayAddedName": displayAddedName
    };

})();