// THIS IS JUST TO BUILD THE DOM FROM JSON FILE
var Chatty = ((originalChatty) => {

	function buildDom(messagesArray) {
		var messageString = "";
		var messagesDiv = document.getElementById(`inner-container`);
		var latestMessage = messagesDiv.firstChild;
		var timeStamp = Date();
		var idCounter = 0;


		// Loop through array and add JSON
		for (var i = 0; i < messagesArray.length; i++) {
			idCounter++;
			messageString = `
				<div class='row'>
					<p class='lighten enlarge message-name'>${messagesArray[i].name}</p>
					<p class='lighten enlarge edit'>${messagesArray[i].content}</p>
					<p class='lighten enlarge'>${timeStamp}</p>
					<button class="darken lighten" id="edit--${idCounter}">Edit</button>
					<button class="darken lighten" id="delete--${idCounter}">Delete</button>
				</div>`
			var newDiv = document.createElement(`article`);
		  newDiv.innerHTML = messageString;
		  newDiv.id = `contentWrapper--${idCounter}`;
		  //messagesDiv.appendChild(newDiv);
		  messagesDiv.insertBefore(newDiv, latestMessage);
			document.getElementById(`delete--${idCounter}`).addEventListener("click", Chatty.deleteCard);
			document.getElementById(`edit--${idCounter}`).addEventListener("click", Chatty.editCard);
		}


	};

	originalChatty.loadMessage(buildDom);

	return originalChatty;

})(Chatty || {});