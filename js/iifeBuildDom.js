// THIS IS JUST TO BUILD THE DOM FROM JSON FILE
var Chatty = ((originalChatty) => {

	function buildDom(messagesArray) {
	var messageString = "";
	var messagesDiv = document.getElementById(`inner-container`);
	var timeStamp = Date.now();


	// Loop through array and add JSON
		for (var i = 0; i < messagesArray.length; i++) {
			// Need to build user, message, timestamp and buttons (edit and delete)
			messageString += `
				<div class='row'>
					<p class='lighten enlarge message-name'>${messagesArray[i].name}</p>
					<p class='lighten enlarge'>${messagesArray[i].content}</p>
					<p class='lighten enlarge'>${timeStamp}</p>
					<button class="darken lighten">Edit</button>
					<button class="darken lighten">Delete</button>
				</div>`
		}

		messagesDiv.innerHTML = messageString;

	};

	originalChatty.loadMessage(buildDom);

	return originalChatty;

})(Chatty || {});