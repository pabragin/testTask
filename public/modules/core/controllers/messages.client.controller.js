'use strict';
angular.module('core').controller('MessagesController', ['$scope', 'presenter', 'consumer', function ($scope, presenter, consumer) {

        $scope.messages = [];

        /**
         * Fires on click next button
         */
        $scope.loadNextMessage = function () {
            consumer.getRandomData(presenter);
        };

        /**
         * When data updates in presenter
         * update messages
         */
        $scope.$watch('presenter.messages', function () {
            $scope.messages = presenter.getMessages();
        });
    }]
);