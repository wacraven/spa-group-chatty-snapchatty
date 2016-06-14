var Chatty = ((originalChatty) => {

	var inputEl = document.getElementById(`user-input`);
	var clearBtn = document.getElementById("clear-messages");
	
	inputEl.addEventListener(`keyup`, (event) => {
		if (event.keyCode === 13) {
			// add message to array
			console.log("it works");
			originalChatty.userFetch();
		}
	});

	clearBtn.addEventListener(`click`, (event) => {
		// This needs to be removeChild(), not remove
		var container = document.getElementById(`inner-container`);
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
	});

	return originalChatty;

})(Chatty || {});