function init() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const messagesJson = JSON.parse(this.responseText);
      const messageSample = document.getElementById("message_sample");
      for (message in messagesJson.data){
        const newMessage = messageSample.cloneNode(true);
        newMessage.classList.remove("d-none");
        newMessage.getElementsByTagName('p')[0].innerHTML = messagesJson.data[message].text;
        newMessage.getElementsByTagName('h2')[0].innerHTML = messagesJson.data[message].username;
        messageSample.parentNode.appendChild(newMessage);
      }
    }
  };

  xhr.open("GET", "http://localhost:8080/api/discord/message/list?channelId=1&perPage=10&page=1", true);
  xhr.setRequestHeader("x-access-token",  document.cookie);

  xhr.send();
}

init();