var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data){ 
      callback(data.items)
    }
  })
 
};

window.searchYouTube = searchYouTube;
