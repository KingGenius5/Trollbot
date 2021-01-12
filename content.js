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
