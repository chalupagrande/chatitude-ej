
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

    $('#submit').on('click', function(event){
      event.preventDefault();
      var token = localStorage.getItem('apiKey');
      if (token){
        var theMessage = {}
        theMessage.message = $('#message').val();
        theMessage.apiToken = token;
        Chats.send(theMessage)
        Chats.fetch();
      }
      $('#message').val('');
    })
  }

  Feed.View = function(data){
    //update dom function
    var feed = $('<div>'); 
    data.map(function(item){
      //style these

      var message = item.message.replace(/<>/g,"");



      var curMessage = $('<div class = "message">');
      curMessage.append(item.user + " - ");
      curMessage.append(message);
      feed.prepend(curMessage)
    });
    return feed;

  };

  Feed.Presenter();
  Chats.fetch();

})()



//sign in listener: 
//render: updates the physical DOM
//sign in
