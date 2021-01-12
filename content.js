setInterval(function () {
  let url = window.location.host;
  let word = ["corona", "covid", "covid-19", "covid19", "jokowi", "virus"];

  if (url == "twitter.com") {
    let feed;
    feed = document.getElementsByClassName("css-901oao");
    for (let i = 0; i < feed.length; i++) {
      // console.log("! "+i);
      // console.log(feed[i].innerHTML.toLowerCase());
      for (let j = 0; j < word.length; j++) {
        let find = feed[i].innerHTML.toLowerCase().search(word[j]);
        if (find != -1) {
          feed[i].style.filter = "blur(10px)";
          feed[i].style.cursor = "not-allowed";
          break;
        }
      }
    }
  }
}, 1000);

(function () {
  function fnAddButtons() {
    var btn = document.createElement("input");
    btn.value = "Fact Check";
    btn.id = "troll-btn";
    btn.type = "submit";
    document
      .querySelector(
        "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(2) > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div > div:nth-child(3) > div:nth-child(4)"
      )
      .appendChild(btn);
  }

  function fnDefindEvents() {
    document
      .getElementById("troll-btn")
      .addEventListener("click", function (event) {
        fnSearch(event.target.value.split(" ")[1]);
      });
  }
})();
