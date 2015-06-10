angular.module('core').factory('presenter', [ '$timeout', function( $timeout ){
    var uniqID = 0;

    return {
        /**
         * messageId - int
         * messageType - "text"/"pic"
         * lifeLength - int(milliseconds)
         * messageData - string
         */
        messages: [],
        /**
         * Adds new message to array
         */
        addNewMessage: function(data){
            var that = this;
            data.messageId = uniqID; // add iniq ID for every messages
            this.messages.push(data);
            uniqID++;
            $timeout(function(){that.removeMessage(data)}, data.lifeLength);
        },
        /**
         * Return array of messages
         */
        getMessages: function(){
            return(this.messages);
        },
        /**
         * Remove specific item from array
         */
        removeMessage: function(item) {
            for(var i = this.messages.length; i--;) {
                if(this.messages[i] === item) {
                    this.messages.splice(i, 1);
                }
            }
        }
    }
}]);
