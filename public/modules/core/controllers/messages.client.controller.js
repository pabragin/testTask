'use strict';
angular.module('core').controller('MessagesController', ['$scope', '$rootScope', 'presenter', 'consumer', function ($scope, $rootScope, presenter, consumer) {

        $scope.messages = [];

        /**
         * Fires on click next button
         */
        $scope.loadNextMessage = function () {
            consumer.getRandomData(presenter);
        };

        /**
         * When data updates in presenter
         * we get "messages.update"
         */
        $scope.$on('messages.update', function () {
            $scope.messages = presenter.getMessages();
            $scope.$apply();
        });
    }]
);