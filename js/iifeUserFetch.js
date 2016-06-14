var Chatty = ((originalChatty) => {
	var userBoba = document.getElementById('userSelect-Boba')
	var userBossk = document.getElementById('userSelect-Bossk')
	var userDengar = document.getElementById('userSelect-Dengar')
	var userIG88 = document.getElementById('userSelect-IG88')
	var userAurra = document.getElementById('userSelect-AurraSing')


	originalChatty.userFetch = function() {
		if (userBoba.checked == true) {
			console.log("Boba Checked");
		} else if (userBossk.checked == true) {
			console.log("Bossk Checked");
		} else if (userDengar.checked == true) {
			console.log("Dengar Checked");
		} else if (userIG88.checked == true) {
			console.log("IG88 Checked");
		} else if (userAurra.checked == true) {
			console.log("Aurra Sing Checked");
		} else {
			alert("Please select a user from the list");
		}
	}

})(Chatty || {});