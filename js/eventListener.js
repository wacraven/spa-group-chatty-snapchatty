var Chatty = ((originalChatty) => {

	var inputEl = $('#user-input');
	var clearBtn = $(`#clear-messages`);
	var userSelect = $(".navBar-userSelect");
	var clearBtn = $(`#clear-messages`);
	var darkBtn = $('#darkThemeCheck');
	var largeBtn = $('#largeTextCheck');
	var user;
	

	userSelect.on(`change`, (event) => {
		console.log("change listener", event.target.value);
		user = event.target.value;
		inputEl.focus();
		return user;
	});

	inputEl.on(`keyup`, (event) => {
		if (event.keyCode === 13) {
			// add message to array
			if (user == undefined) {
				user = "Anonymous"
			} 
			if (inputEl.val() == '') {
				alert("I've got a bad feeling about that empty text box. Type something in. You're our only hope!");
				return
			}
			Chatty.userBuildDom(user);
			inputEl.value = "";
			clearBtn.disabled = false; //enables clear button when enter is pushed
		}
	});

	originalChatty.deleteCard = () => {
  	var clickedBtn = event.target.id.split("--")[1];
  	var cardToDelete = document.getElementById(`contentWrapper--${clickedBtn}`);
  	messagesDiv = document.getElementById('inner-container');
  	messagesDiv.removeChild(cardToDelete);
	}

	originalChatty.editCard = () => {
  	var clickedBtn = event.target.id.split("--")[1];
  	var cardToEdit = document.getElementById(`contentWrapper--${clickedBtn}`);
  	var rowEl = cardToEdit.firstElementChild;
  	var messToEdit = rowEl.children[1];
  	console.log("messToEdit", messToEdit);
  	inputEl.value = messToEdit.innerHTML;
  	inputEl.focus();
  	// Picks paragraph, puts in userInput w/focus
  	// Want to use replaceChild()
  	// Can't sort event listener

	}

	originalChatty.trimMessages = () => {
  	var messagesDiv = document.getElementById(`inner-container`);
  	console.log(`messagesDiv`, messagesDiv.children);
  	var messNum = messagesDiv.children;
  	var last = messagesDiv.lastChild;
  	console.log(`inner-comtainer`, messagesDiv.children.length);
  	if (messNum.length >= 20) {
  		messagesDiv.removeChild(last);
  	}

	}

	clearBtn.on(`click`, (event) => {
		// This needs to be removeChild(), not remove
		var container = document.getElementById(`inner-container`);
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
		$(this).attr('disabled');//disables clear button when clear button is pushed
	});

	darkBtn.on('change', (event) => {
		var lightEl = $('.darken');
		var darkEl = $('.lighten');
    lightEl.each(function () {$(this).toggleClass('dark')});
    darkEl.each(function () {$(this).toggleClass('light')});
    var logoImg = $('#logoImg')
    if (logoImg.attr('src') == 'img/logoInvert.png') {
    logoImg.attr('src', "img/logo.png");
    } else {
    logoImg.attr('src', "img/logoInvert.png");
    }
  });

	largeBtn.on('change', (event) => {
			var regText = $('.enlarge');
			regText.each(function () {
				$(this).toggleClass('large');
			});
	});

	return originalChatty;

})(Chatty || {});var Chatty = ((originalChatty) => {

	var inputEl = document.getElementById(`user-input`);
	var clearBtn = document.getElementById(`clear-messages`);
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

	originalChatty.deleteCard = () => {
  	var clickedBtn = event.target.id.split("--")[1];
  	var cardToDelete = document.getElementById(`contentWrapper--${clickedBtn}`);
  	messagesDiv = document.getElementById('inner-container');
  	messagesDiv.removeChild(cardToDelete);
	}

	originalChatty.editCard = () => {
  	var clickedBtn = event.target.id.split("--")[1];
  	var cardToEdit = document.getElementById(`contentWrapper--${clickedBtn}`);
  	var rowEl = cardToEdit.firstElementChild;
  	var messToEdit = rowEl.children[1];
  	console.log("messToEdit", messToEdit);
  	inputEl.value = messToEdit.innerHTML;
  	inputEl.focus();
  	// Picks paragraph, puts in userInput w/focus
  	// Want to use replaceChild()
  	// Can't sort event listener

	}

	originalChatty.trimMessages = () => {
  	var messagesDiv = document.getElementById(`inner-container`);
  	console.log(`messagesDiv`, messagesDiv.children);
  	var messNum = messagesDiv.children;
  	var last = messagesDiv.lastChild;
  	console.log(`inner-comtainer`, messagesDiv.children.length);
  	if (messNum.length >= 20) {
  		messagesDiv.removeChild(last);
  	}

	}

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