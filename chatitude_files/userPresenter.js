
//change listener: 
//call render 
//does not require sign in

(function(){

  User.Presenter = function(){
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

    $('#signIn').on('click',
      function(){
        var un = $('#username').val();
        var pw = $('#password').val();
        var obj = {
          username: un,
          password: pw
        };
        User.signin(obj);
      }
    );


    App.pubsub.on('storedata', function(apikey){
      localStorage.setItem('apiKey', apikey);
    })
  }

  User.View = function(){
    console.log('You\'ve signed in');
  };

  User.Presenter();

})()



//sign in listener: 
//render: updates the physical DOM
//sign in
