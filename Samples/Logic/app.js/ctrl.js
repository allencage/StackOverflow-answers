angular.module('app').controller('ctrl', ['$scope', 'service', controller]);

function controller($scope, service) {
    //Controller as syntax
    $scope.data = service;
    $scope.isBusy = false;
    var vm = this;

    function post() {
        var path = $scope.data.response.path;
        var payload = JSON.parse(decodeURIComponent($scope.data.response.payload));

        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", path);

        for (var key in payload) {
            if (payload.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                if (payload[key] === null) {
                    hiddenField.setAttribute("value", "");
                } else {
                    hiddenField.setAttribute("value", payload[key]);
                }

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
    }
}