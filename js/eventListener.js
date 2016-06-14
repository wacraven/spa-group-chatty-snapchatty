var Chatty = ((originalChatty) => {

	var inputEl = document.getElementById(`user-input`);
	var clearBtn = document.getElementById("clear-messages");
	var userSelect = document.getElementsByClassName("navBar-userSelect").item(0);
	var clearBtn = document.getElementById(`clear-messages`);
	var darkBtn = document.getElementById('darkThemeCheck');
	var largeBtn = document.getElementById('largeTextCheck');
	var regText = document.getElementsByClassName('enlarge');
	var lightEl = document.getElementsByClassName('darken');
	var darkEl = document.getElementsByClassName('lighten');
	var user;
	

	userSelect.addEventListener(`change`, (event) => {
		console.log("change listener", event.target.value);
		user = event.target.value;
		inputEl.focus();
		return user;
	});

	inputEl.addEventListener(`keyup`, (event) => {
		if (event.keyCode === 13) {
			// add message to array
			if (user == undefined) {
				user = "Anonymous"
			} 
			if (inputEl.value == '') {
				alert('You must input text!');
				return
			}
			Chatty.userBuildDom(user);
			inputEl.value = "";
			clearBtn.disabled = false; //enables clear button when enter is pushed
		}
	});

	clearBtn.addEventListener(`click`, (event) => {
		// This needs to be removeChild(), not remove
		var container = document.getElementById(`inner-container`);
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
		clearBtn.disabled = true; //disables clear button when clear button is pushed
	});

	darkBtn.addEventListener('change', (event) => {
    for (i = 0; i < lightEl.length; i++) {
      lightEl.item(i).classList.toggle('dark');
    }
    for (i = 0; i < darkEl.length; i++) {
      darkEl.item(i).classList.toggle('light');
    }
    if (document.getElementById('logoImg').src == "http://localhost:8080/img/logoInvert.png") {
    document.getElementById('logoImg').src = "img/logo.png";
    } else {
    document.getElementById('logoImg').src = "http://localhost:8080/img/logoInvert.png";
    }
  });

	largeBtn.addEventListener('change', (event) => {
		for (i = 0; i < regText.length; i++) {
			regText.item(i).classList.toggle('large');
		}
	});

	return originalChatty;

})(Chatty || {});