'use strict';

angular.module('core').factory('consumer', function () {
    return {
        /**
         * Get message by id
         * and push it to presenter
         */
        getData: function (presenter, currentId) {
            $.get("/messages/" + currentId)
                .fail(function () { // If we cant get this message get first
                    currentId = 0;
                    $.get("/messages/" + currentId, function (data) {
                        presenter.addNewMessage(data);
                    })
                }).done(function (data) {
                    presenter.addNewMessage(data);
                });
        },
        /**
         * Get random message from server
         * and push it to presenter
         */
        getRandomData: function (presenter) {
            $.get("/messages")
                .done(function (data) {
                    presenter.addNewMessage(data);
                });
        },
        /**
         * Push current message to presenter
         */
        pushToPresenter: function (data, presenter) {
            presenter.addNewMessage(data);
        }
    }
});
