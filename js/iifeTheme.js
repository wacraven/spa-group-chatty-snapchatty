Chatty = ((originalChatty) => {
  var darkBtn = document.getElementById('darkThemeCheck');
  var lightEl = document.getElementsByClassName('darken');

  darkBtn.addEventListener('change', (event) => {
    for (i = 0; i < lightEl.length; i++) {
      lightEl.item(i).classList.toggle('dark');
    }
  });
  
  return originalChatty;

})(Chatty || {});

