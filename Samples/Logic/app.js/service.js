(function () {
    angular.module('app').factory('service', ['$http', '$q', service]);

    function service($http, $q) {

        var _response = {};

        var url = {
            Get: 'link',
            Post: 'link'
        }

        var _isInit = false;
        function _isReady() {
            return _isInit;
        }

        function _getResponse() {
            var def = $q.defer();

            $http.get(url.Get, config)
                .then(
                function (result) {
                    angular.copy(result.data, _response);
                    _isInit = true;
                    def.resolve();
                },
                function () {
                    def.reject();
                });
            return def.promise;
        }

        var service = {
            response: _response,
            isReady: _isReady,
            getResponse: _getResponse
        };
    }
    })();