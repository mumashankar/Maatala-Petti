const chatbox = document.querySelector('.chatbox');
const inputBox = document.querySelector('.query');
const loadingDiv = document.querySelector('.loading');

inputBox.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
  event.preventDefault();
  const text = inputBox.value.trim();
  if (text !== "") {
    addMsgToChatBox('question', text, new Date().getTime());
    inputBox.value = "";
    inputBox.disabled = true;
    submitQuery(text);
  }
}
});

function showLoadingDiv() {
    console.log(loadingDiv, loadingDiv.classList);
    loadingDiv.classList.remove('hide');
    loadingDiv.classList.add('show');
}

function hideLoadingDiv() {
    loadingDiv.classList.add('hide');
    loadingDiv.classList.remove('show');
}

function submitQuery(qStr) {
    var timeStmp;
    showLoadingDiv();console.log(qStr, encodeURIComponent(qStr));
    setTimeout(() => {
        fetch("/api/sendMsg?userMessage="+encodeURIComponent(qStr), {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          if(data.choices && data.choices.length > 0) {
            timeStmp = data.created;
            data = data.choices[0];
            if(data.message) {
                data = data.message;
                if(data.content) {
                    addMsgToChatBox('answer', data.content, timeStmp);
                } else {
                    console.error("data.content is unavailable.", data);
                }
            } else {
                 console.error("data.message is unavailable.", data);
            }
          } else {
                console.error("data.choices is unavailable.", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        })
        .finally(() => {
            hideLoadingDiv();
            inputBox.disabled = false;
        })
    });
}

function formatTimestampToTime(timestamp) {
  const date = new Date(timestamp)
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? "PM" : "AM"
  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? "0" + minutes : minutes
  return `${hours}:${minutes} ${ampm}`
}

function addQuestion(text) {
    const div = document.createElement('div');
    div.className = 'message question';
    div.textContent = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function addAnswer(text, timeStmp) {
    const div = document.createElement('div');
    div.className = 'message answer';
    div.textContent = text;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'time';
    timeDiv.textContent = formatTimestampToTime(timeStmp);
    div.appendChild(timeDiv);

    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function addMsgToChatBox( msgType, text, timeStmp){
    const div = document.createElement('div');
    div.className = 'message ' + msgType;
    div.textContent = text;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'time';
    timeDiv.textContent = formatTimestampToTime(timeStmp);
    div.appendChild(timeDiv);

    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}
