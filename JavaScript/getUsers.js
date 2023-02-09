function init() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const usersJson = JSON.parse(this.responseText);
      const userSample = document.getElementById("user_sample");
      for (user in usersJson.data){
        const newUser = userSample.cloneNode(true);
        newUser.classList.remove("d-none");
        newUser.getElementsByTagName('h2')[0].innerHTML = usersJson.data[user].username;
        userSample.parentNode.appendChild(newUser);
      }
    }
  };

  xhr.open("GET", "http://localhost:8080/api/discord/user/list?channelId=1&perPage=10&page=1", true);
  xhr.setRequestHeader("x-access-token",  document.cookie);

  xhr.send();
}


init();