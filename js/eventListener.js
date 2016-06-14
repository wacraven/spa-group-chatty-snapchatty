var Chatty = ((originalChatty) => {

	var inputEl = document.getElementById(`user-input`);
	var clearBtn = document.getElementById("clear-messages");
	var userSelect = document.getElementsByClassName("navBar-userSelect").item(0);
	
	inputEl.addEventListener(`keyup`, (event) => {
		if (event.keyCode === 13) {
			// add message to array
			console.log("it works");
		}
	});

	clearBtn.addEventListener(`click`, (event) => {
		// This needs to be removeChild(), not remove
		var container = document.getElementById(`inner-container`);
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
	});

	userSelect.addEventListener(`change`, (event) => {
		console.log("change listener", event.target.value);
	});


	return originalChatty;

})(Chatty || {});