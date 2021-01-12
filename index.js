const { Botometer } = require("botometer");

const botometer = new Botometer({
  consumerKey: "<consumerKey>",
  consumerSecret: "<consumerSecret>",
  accessToken: "<accessToken>",
  accessTokenSecret: "<accessTokenSecret>",
  rapidApiKey: "<rapidApiKey>",
  supressLogs: false, // Not required. Defaults to true
});

async function fnCheck() {
  const results = await botometer.getScores(["@aandreyluiz"]);

  console.log(results);
}

fnCheck();
