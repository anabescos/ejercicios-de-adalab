'use strict'

let userData = {};
function getGitData() {
  console.log(1)
    fetch("https://api.github.com/users/gootyfer") // empieza pause
      .then(response => response.json()) // se reanuda
      .then(data => {
        cleanApiData(data);
        paintData()
        console.log(2)
      });
      console.log(3)
  }
  const btn = document.querySelector(".js-gitData");
  btn.addEventListener("click", getGitData);
  function cleanApiData (data) {
    userData = {
      createdAt: data.created_at,
      avatarUrl: data.avatar_url,
      name: data.login
    }
  }
  function paintData () {
        // pintar
        const img = document.querySelector(".js-image");
        img.src = userData.avatarUrl;
        img.alt = "Foto usuario";
  }
  function logUserData() {
    console.log(userData)
  }
  const body = document.querySelector("body");
  body.addEventListener("click", logUserData);