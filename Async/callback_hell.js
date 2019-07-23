window.onload = () => {
  //   $.get("data/tweets.json", data => console.log(data));
  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: function(data) {
      console.log(data);
      $.ajax({
        type: "GET",
        url: "data/friends.json",
        success: function(data) {
          console.log(data);
          $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function(data) {
              console.log(data);
            },
            error: function(jqXHR, textStatus, error) {}
          });
        },
        error: function(jqXHR, textStatus, error) {}
      });
    },
    error: function(jqXHR, textStatus, error) {}
  });
};
