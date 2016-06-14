var Chatty = ((originalChatty) => {

	function userBuildDom(user) {
	var messageString = "";
	var userInput = document.getElementById(`user-input`).value;
	var messagesDiv = document.getElementById(`inner-container`);
	var timeStamp = Date.now();

		for (var i = 0; i < ??.length; i++) {
			// Need to build user, message, timestamp and buttons (edit and delete)
			messageString += `
				<div class='row'>
					<h2>TOM</h2>
					<p>${userInput}</p>
					<p>${timeStamp}</p>
					<button>Edit</button>
					<button>Delete</button>
				</div>`
		}

		messagesDiv.innerHTML += messageString;

	};

	return originalChatty;

})(Chatty || {});

// Need users - Name - checkboxes - an array for each with their messages