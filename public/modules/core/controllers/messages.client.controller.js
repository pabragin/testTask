'use strict';
angular.module('core').controller('MessagesController', ['$scope', '$rootScope', 'presenter', 'consumer', function($scope, $rootScope, presenter, consumer) {

		$scope.messages = [];
		$scope.loadNextMessage = function () {
			consumer.getRandomData(presenter);
		};

		$scope.$on( 'messages.update', function( ) {
			$scope.messages = presenter.getMessages();
			$scope.$apply();
		});
	}]
);