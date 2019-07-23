window.onload = () => {
  // Jquery Promise
  $.get("data/tweets.json").then(tweets => {
    console.log(tweets);
    return $.get("data/friends.json")
      .then(friends => {
        console.log(friends);
        return $.get("data/videos.json");
      })
      .then(videos => {
        console.log(videos);
      });
  });
};
