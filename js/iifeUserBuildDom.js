var Chatty = ((originalChatty) => {
	var darkEl = document.getElementsByClassName('lighten');
	var darkBtn = document.getElementById('darkThemeCheck');
	var lightEl = document.getElementsByClassName('darken');


	originalChatty.userBuildDom = function(user) {
		var messageString = "";
		var userInput = document.getElementById(`user-input`).value;
		var messagesDiv = document.getElementById(`inner-container`);
		var timeStamp = Date();


		// Need to build user, message, timestamp and buttons (edit and delete)
		if (darkBtn.checked == true) {
			messageString += `
				<div class='row'>
					<p class='lighten enlarge message-name light'>${user}</p>
					<p class='lighten enlarge light'>${userInput}</p>
					<p class='lighten enlarge light'>${timeStamp}</p>
					<button class="darken lighten dark light">Edit</button>
					<button class="darken lighten dark light">Delete</button>
				</div>`
		} else {
			messageString += `
				<div class='row'>
					<p class='lighten enlarge message-name'>${user}</p>
					<p class='lighten enlarge'>${userInput}</p>
					<p class='lighten enlarge'>${timeStamp}</p>
					<button class="darken lighten">Edit</button>
					<button class="darken lighten">Delete</button>
				</div>`
		}

		messagesDiv.innerHTML += messageString;
		// Clear input after message added
		userInput = "";
	};

	return originalChatty;

})(Chatty || {});

// Need users - Name - checkboxes - an array for each with their messages