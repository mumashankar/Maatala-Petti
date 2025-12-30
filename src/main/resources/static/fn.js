const chatbox = document.getElementById('chatbox');
const inputBox = document.querySelector('.query');

  inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // prevent form submission if inside a form
      const text = inputBox.value.trim();
      if (text !== "") {
        console.log("Submitted:", text);
        inputBox.value = "";
      }
    }
  });

function addQuestion(text) {
    const div = document.createElement('div');
    div.className = 'message question';
    div.textContent = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function addAnswer(text) {
    const div = document.createElement('div');
    div.className = 'message answer';
    div.textContent = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
  }


