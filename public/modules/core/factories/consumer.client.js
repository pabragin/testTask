'use strict';

angular.module('core').factory('consumer', function () {
    return {
        /**
         * Get message by id
         * and push it to presenter
         */
        getData: function (presenter, currentId) {
            $.ajax({url: "/messages/" + currentId, success: function (data) {
                presenter.addNewMessage(data);
            }, cache: false});
        },
        /**
         * Get random message from server
         * and push it to presenter
         */
        getRandomData: function (presenter) {
            $.ajax({url: "/messages", success: function (data) {
                presenter.addNewMessage(data);
            }, cache: false});
        },
        /**
         * Push current message to presenter
         */
        pushToPresenter: function (data, presenter) {
            presenter.addNewMessage(data);
        }
    }
});
