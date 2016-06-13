var Chatty = ((originalChatty) => {

	var inputEl = document.getElementById(`user-input`);
	var clearBtn = document.getElementById(`clear-messages`);

	originalChatty.activateEvents = (event) => {

		inputEl.addEventListener(`keyup`, (event) => {
			if (event.keyCode === 13) {
				// add message to array
				console.log("it works");
			}
		})

	};

	return originalChatty;

})(Chatty || {});