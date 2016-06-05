var HTMLService = {

    displayAddedName: function(text) {
       var listItem = HTMLService.createListItem(text);
       HTMLService.addToList(listItem);
    },
    
    createListItem: function (text) {
        var listItem = document.createElement('li');
        listItem.innerHTML = text;
        return listItem;
    },
    
    addToList: function (listItem) {
        var ul = document.getElementById('list-name');
        ul.appendChild(listItem);
    }
    
};