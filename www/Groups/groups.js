(function() {
    angular
        .module("fht.groups", [])

        .controller('groupsCtrl', groupsCtrl)
        

    function GroupsFactory() {
        return false;
    }

    function groupsCtrl() {
        console.log('Groups Page');
    }

})();