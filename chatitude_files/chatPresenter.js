
//change listener: 
//call render 
//does not require sign in

(function(){
  window.Feed = {};

  Feed.Presenter = function(){
   //change listener
    var element = $('#chats'); 
    App.pubsub.on('change', function(data){
      render(data); //??? might be this?
    })

   //render - call update dom func in view
    var render = function(data){
      element.empty().append(
        //append each individual message to something
        // append that something to the element
        Feed.View(data)
      )
    }
  }

  Feed.View = function(data){
    //update dom function
    var feed = $('<div>');

    data.map(function(item){
      //style these
      var curMessage = $('<div class = "message">');
      curMessage.append(item.user + " - ");
      curMessage.append(item.message);
      feed.append(curMessage)
    });
    return feed;

  };

  Feed.Presenter();
  Chats.fetch();

})()



//sign in listener: 
//render: updates the physical DOM
//sign in
