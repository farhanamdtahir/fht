(function() {
    angular
        .module("fht.groups", [])
        .factory('GroupsFactory', groupsFactory)

        .controller('groupsCtrl', groupsCtrl)

    function groupsFactory() {
        return false;
    }

    function groupsCtrl() {
        console.log('groups Page');
    }

})();