Chatty = ((originalChatty) => {
  var darkBtn = document.getElementById('darkThemeCheck');
  var lightEl = document.getElementsByClassName('darken');
  var darkEl = document.getElementsByClassName('lighten');

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

