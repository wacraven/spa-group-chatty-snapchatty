var Chatty = ((originalChatty) => {

	messageBoardArray = [];


		// Get JSON data
		// callback is parameter for buildDom
		originalChatty.loadMessage = (callback) => {
			var messageRequest = new XMLHttpRequest();

			messageRequest.addEventListener(`load`, () => {
				var messageData = JSON.parse(messageRequest.responseText);				

				messageBoardArray = messageData.messages;

				// This should build DOM with updated info
				callback(messageBoardArray);
			});
			
			messageRequest.addEventListener(`error`, () => {
				console.log(`An error occurred while transferring the messageData`);
			});

			messageRequest.open(`GET`, `js/primary.json`); 
			messageRequest.send();

		};


	return originalChatty;


})(Chatty || {});