var Chatty = ((originalChatty) => {

	var inputEl = document.getElementById(`user-input`);
	var clearBtn = document.getElementById(`clear-messages`);
	var darkBtn = document.getElementById('darkThemeCheck');
  var lightEl = document.getElementsByClassName('darken');
  var darkEl = document.getElementsByClassName('lighten');
	
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

	darkBtn.addEventListener('change', (event) => {
    for (i = 0; i < lightEl.length; i++) {
      lightEl.item(i).classList.toggle('dark');
    }
    for (i = 0; i < darkEl.length; i++) {
      darkEl.item(i).classList.toggle('light')
    }
  });

	return originalChatty;

})(Chatty || {});