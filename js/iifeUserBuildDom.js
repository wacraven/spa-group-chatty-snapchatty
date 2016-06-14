var Chatty = ((originalChatty) => {

	originalChatty.userBuildDom = function(user) {
		var messageString = "";
		var userInput = document.getElementById(`user-input`).value;
		var messagesDiv = document.getElementById(`inner-container`);
		var timeStamp = Date();


		// Need to build user, message, timestamp and buttons (edit and delete)
		messageString += `
			<div class='row'>
				<p class='lighten enlarge message-name'>${user}</p>
				<p class='lighten enlarge'>${userInput}</p>
				<p class='lighten enlarge'>${timeStamp}</p>
				<button class="darken lighten">Edit</button>
				<button class="darken lighten">Delete</button>
			</div>`

		messagesDiv.innerHTML += messageString;
		// Clear input after message added
		userInput = "";

	};

	return originalChatty;

})(Chatty || {});

// Need users - Name - checkboxes - an array for each with their messages