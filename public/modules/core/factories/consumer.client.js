'use strict';

angular.module('core').factory('consumer', ["$http", function ($http) {
    return {
        /**
         * Get message by id
         * and push it to presenter
         */
        getData: function (presenter, currentId) {
            $http.get("/messages/" + currentId).
                success(function(data){
                    presenter.addNewMessage(data);
                }
            );
        },
        /**
         * Get random message from server
         * and push it to presenter
         */
        getRandomData: function (presenter) {
            $http.get("/messages/random", {cache: false}).success(function(data){
                    presenter.addNewMessage(data);
                }
            );
        },
        /**
         * Push current message to presenter
         */
        pushToPresenter: function (data, presenter) {
            presenter.addNewMessage(data);
        }
    }
}]);
