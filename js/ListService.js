var ListService = {

    names: [],

    getList: function () {
        return ListService.names;
    },

    addName: function (name) {
        ListService.names.push(name);
    },

    loadNames: function () {
        //TODO to be implemented   
    },

    saveNames: function () {
        //TODO to be implemented
    }
};