(function(){

window.Controller = {} //no jQuery

//func get message 
Controller.getMessages = function(){
  return Chats.fetch()
}

Controller.storeApiKey = function(apiKey){
  localStorage.setItem('apiKey', apiKey)
}

Controller.checkSignedIn = function(){
  var token = localStorage.getItem('apiKey');
  if (token) {
    return token
  } else {
    return false;
  }

}
Controller.callSignIn = function(unpw){
  User.signin(unpw)
}
//func userSignIn 
  //call User.signin() -which returns api key
  //save api key in local storage

/*~~~~~~~~~~~~~~~~~~~
      VIEW
~~~~~~~~~~~~~~~~~~~~*/

window.View = {}
  var element = $('#chats');

  //Appends FEED to the dom
  View.render = function(data){
    element.empty().append(View.displayMessages(data))
  }

  //Appends messages to the FEED
  View.displayMessages = function(data){    
    var feed = $('<div>'); 
    _.map(data, function(item){
      //filters data
      var message = item.message.replace(/<>/g,""); //controller?
      //adds data
      var curMessage = $('<div class = "message">');
      curMessage.append(item.user + " - ")//.append(message);
      curMessage.append(message);
      feed.prepend(curMessage)
    });
    return feed;
  }

/*~~~~~~~~~~~~~
    Listeners
~~~~~~~~~~~~~~~~~*/

 //submit MESSAGE listener: 
  $('#submit').on('click', function(event){
    event.preventDefault();

    var token = localStorage.getItem('apiKey');
    if (Controller.checkSignedIn()){ 
      var token = Controller.checkSignedIn();
      var theMessage = {}
      theMessage.message = $('#message').val();
      theMessage.apiToken = token;
      Chats.send(theMessage)
      //-fetches data 
      Controller.getMessages();
    }

    $('#message').val('');
  });

  //Signup listener on button click
  $('#signUp').on('click',
    function(){
      var un = $('#username').val();
      var pw = $('#password').val();
      var obj = {
        username: un,
        password: pw
      };
      User.signup(obj);
    }
  );

  //sign in listener on button click
    //calls userSignIn func in controller
  $('#signIn').on('click',
    function(){
      var un = $('#username').val();
      var pw = $('#password').val();
      var obj = {
        username: un,
        password: pw
      };
      Controller.callSignIn(obj);
    }
  );

  //listener for fetch to succeed
  App.pubsub.on('change', function(data){View.render(data)});
  App.pubsub.on('fetchData', Controller.getMessages);
  App.pubsub.on('storeData', function(key){Controller.storeApiKey(key)});


  //Calling initial fetch to populate page
  Controller.getMessages()
  
})();




