angular.module('core').factory('presenter', [ '$rootScope', function( $rootScope ){
    var uniqID = 0;

    return {
        /**
         * Contains json
         * messageId - int
         * messageType - "text"/"pic"
         * lifeLength - int(milliseconds)
         * messageData - string
         */
        messages: [],
        /**
         * Adds new message to array
         * and broadcast about that
         */
        addNewMessage: function(data){
            data.messageId = uniqID; // add iniq ID for every messages
            this.messages.push(data);
            uniqID++;
            $rootScope.$broadcast( 'messages.update' );
            var that = this;
            setTimeout(function(){that.removeMessage(data)}, data.lifeLength);
        },
        /**
         * Return array of messages
         */
        getMessages: function(){
            return(this.messages);
        },
        /**
         * Remove specific item from array
         * and broadcast about that
         */
        removeMessage: function(item) {
            for(var i = this.messages.length; i--;) {
                if(this.messages[i] === item) {
                    this.messages.splice(i, 1);
                    $rootScope.$broadcast( 'messages.update' );
                }
            }
        }
    }
}]);
