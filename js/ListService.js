var ListService = {

    names: [],

    getList: function () {
        ListService.loadNames();
        return ListService.names;
    },

    addName: function (name) {
        ListService.names.push(name);
        ListService.saveNames();
    },

    loadNames: function () {
        var namesJsonText = window.localStorage.getItem('list-names');
        if(namesJsonText) {
            ListService.names = JSON.parse(namesJsonText);
        }   
    },

    saveNames: function () {
        var namesJsonText = JSON.stringify(ListService.names);
        window.localStorage.setItem('list-names', namesJsonText);
    }
};