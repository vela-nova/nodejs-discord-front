function init() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const channelsJson = JSON.parse(this.responseText);
      const channelSample = document.getElementById("channel_button_sample");
      for (channel in channelsJson.data){
        const newChannel = channelSample.cloneNode(true);
        newChannel.classList.remove("d-none");
        newChannel.innerHTML = channelsJson.data[channel].name;
        channelSample.parentNode.appendChild(newChannel)
      }
    }
  };

  xhr.open("GET", "http://localhost:8080/api/discord/channel/list?perPage=10&page=1", true);
  xhr.setRequestHeader("x-access-token", document.cookie);

  xhr.send();
}

init();