(function() {
    angular
        .module("fht.groups", [])
        .factory('groupsFactory', profileFactory)

        .controller('groupsCtrl', profileCtrl)

    function GroupsFactory() {
        return false;
    }

    function groupsCtrl() {
        console.log('Groups Page');
    }

})();