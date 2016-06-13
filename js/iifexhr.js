var Chatty = ((originalChatty) => {

	messageBoardArray = [];


		// Get JSON data
		// callback is parameter for buildDom
		originalChatty.loadMessage = (callback) => {
			var messageRequest = new XMLHttpRequest();

			messageRequest.addEventListener(`load`, () => {
				var messageData = JSON.parse(messageRequest.responseText);				
				// console.log(`messageData`, messageData);
				messageBoardArray = messageData.messages;
				// console.log(`primary.json successfully loaded!`);
				// This should build DOM with updated info
				callback(messageBoardArray);
			});
			
			messageRequest.addEventListener(`error`, () => {
				console.log(`An error occurred while transferring the messageData`);
			});

			messageRequest.open(`GET`, `js/primary.json`); //js/primary.json instead of just primary.json
			messageRequest.send();

		};


	return originalChatty;


})(Chatty || {});