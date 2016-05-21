(function() {
    angular
        .module("fht.groups", [])

        .controller('groupsregCtrl', groupsregCtrl)

    function GroupsFactory() {
        return false;
    }

    function groupsCtrl() {
        console.log('Groups Page');
    }

})();