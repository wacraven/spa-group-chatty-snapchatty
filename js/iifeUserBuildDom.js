var Chatty = ((originalChatty) => {

	var idCounter = 5;

	originalChatty.userBuildDom = function(user) {
		var messageString = "";
		var userInput = document.getElementById(`user-input`).value;
		var messagesDiv = document.getElementById(`inner-container`);
		var timeStamp = Date();


		// Need to build user, message, timestamp and buttons (edit and delete)
		idCounter ++
		messageString += `
			<div class='row'>
				<p class='lighten enlarge message-name'>${user}</p>
				<p class='lighten enlarge'>${userInput}</p>
				<p class='lighten enlarge'>${timeStamp}</p>
				<button class="darken lighten" id="edit--${idCounter}">Edit</button>
				<button class="darken lighten" id="delete--${idCounter}">Delete</button>
			</div>`

		// messagesDiv.innerHTML += messageString;

		var newDiv = document.createElement("article");
	  newDiv.innerHTML = messageString;
	  newDiv.id = `contentWrapper--${idCounter}`;
	  messagesDiv.appendChild(newDiv);

		document.getElementById(`delete--${idCounter}`).addEventListener("click", Chatty.deleteCard);
		// Clear input after message added
		userInput = "";

	};

	return originalChatty;

})(Chatty || {});

// Need users - Name - checkboxes - an array for each with their messages