var Chatty = ((originalChatty) => {
	var darkEl = document.getElementsByClassName('lighten');
	var darkBtn = document.getElementById('darkThemeCheck');
	var lightEl = document.getElementsByClassName('darken');


	var idCounter = 5;

	originalChatty.userBuildDom = function(user) {
		var messageString = "";
		var userInput = document.getElementById(`user-input`).value;
		var messagesDiv = document.getElementById(`inner-container`);
		var latestMessage = messagesDiv.firstChild;
		var timeStamp = Date();


		// Need to build user, message, timestamp and buttons (edit and delete)
		if (darkBtn.checked == true) {
		idCounter ++;
		messageString += `
			<div class='row'>
				<p class='lighten enlarge message-name light'>${user}</p>
				<p class='lighten enlarge light edit'>${userInput}</p>
				<p class='lighten enlarge light'>${timeStamp}</p>
				<button class="darken lighten dark light" id="edit--${idCounter}">Edit</button>
				<button class="darken lighten dark light" id="delete--${idCounter}">Delete</button>
			</div>`
		} else {
		idCounter ++;
		messageString += `
			<div class='row'>
				<p class='lighten enlarge message-name'>${user}</p>
				<p class='lighten enlarge edit'>${userInput}</p>
				<p class='lighten enlarge'>${timeStamp}</p>
				<button class="darken lighten" id="edit--${idCounter}">Edit</button>
				<button class="darken lighten" id="delete--${idCounter}">Delete</button>
			</div>`
		}

		var newDiv = document.createElement(`article`);
	  newDiv.innerHTML = messageString;
	  newDiv.id = `contentWrapper--${idCounter}`;
	  //messagesDiv.appendChild(newDiv);
	  messagesDiv.insertBefore(newDiv, latestMessage);
		document.getElementById(`delete--${idCounter}`).addEventListener("click", Chatty.deleteCard);
		document.getElementById(`edit--${idCounter}`).addEventListener("click", Chatty.editCard);
		originalChatty.trimMessages();
	};

	return originalChatty;

})(Chatty || {});

// Need users - Name - checkboxes - an array for each with their messages