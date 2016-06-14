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
					<h2>${messagesArray[i].name}</h2>
					<p>${messagesArray[i].content}</p>
					<p>${timeStamp}</p>
					<button>Edit</button>
					<button>Delete</button>
				</div>`
		}

		messagesDiv.innerHTML = messageString;

	};

	// Do I need a return here for Chatty?  Or does passing DOM into loadMessage work?
	originalChatty.loadMessage(buildDom);

	return originalChatty;

})(Chatty || {});