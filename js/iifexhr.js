var Chatty = ((originalChatty) => {

	messageBoardArray = [];


		// Get JSON data
		// callback is parameter for buildDom
	originalChatty.loadMessage = function(callback) {
		
		$.ajax({
			url: 'js/primary.json',
		})
		.done(function(messageData) {
			messageBoardArray = messageData.messages;
			// This should build DOM with updated info
			callback(messageBoardArray);
		})
		.fail(function() {
			console.log("An error occurred while transferring the messageData");
		})
	}


	return originalChatty;


})(Chatty || {});