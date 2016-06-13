var Chatty = ((originalChatty) => {

	messageBoardArray = [];

	return {
		// callback is parameter for buildDom
		loadMessage: (callback) => {
			var messageRequest = new XMLHttpRequest();

			messageRequest.addEventListener(`load`, () => {
				var messageData = JSON.parse(this.responseText);				
				console.log("messageData", messageData);
				messageBoardArray = messageData.messages;
				console.log(`primary.json successfully loaded!`);
				// This should build DOM with updated info
				callback(messageBoardArray);
			});
			
			messageRequest.addEventListener(`error`, () => {
				console.log("An error occurred while transferring the messageData");
			});

			messageRequest.open(`GET`, `primary.json`);
			messageRequest.send();

		}

	};


})(Chatty || {});