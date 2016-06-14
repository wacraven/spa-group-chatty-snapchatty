var Chatty = ((originalChatty) => {

	originalChatty.userBuildDom = function(user) {
		var messageString = "";
		var userInput = document.getElementById(`user-input`).value;
		var messagesDiv = document.getElementById(`inner-container`);
		var timeStamp = Date.now();


		// Need to build user, message, timestamp and buttons (edit and delete)
		messageString += `
			<div class='row'>
				<p>${user}</p>
				<p>${userInput}</p>
				<p>${timeStamp}</p>
				<button>Edit</button>
				<button>Delete</button>
			</div>`

		messagesDiv.innerHTML += messageString;
		// Clear input after message added
		userInput = "";

	};

	return originalChatty;

})(Chatty || {});

// Need users - Name - checkboxes - an array for each with their messages