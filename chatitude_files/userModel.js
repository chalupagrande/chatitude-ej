// { id message time user}
(function(){
  
  var user = [];

  window.User = {

    signin: function(unpw){

      $.ajax({
        url: 'http://chat.api.mks.io/signin',
        type: 'POST',
        data: unpw,
        success: function (apiKey) {
          //store this in localStorage
          App.pubsub.emit('storedata', apiKey);
          console.log(apiKey)
        },
        error: function(){
          console.log('Failed to sign in!')
        }
      })
    },

    signup: function(unpw){
      $.ajax({
        url: 'http://chat.api.mks.io/signup',
        type: 'POST',
        data: unpw,
        success: function () {
           //store this in localStorage
           Alert('You Have Signed Up successfully')
        },
        error: function(){
          console.log('Failed to signup!')
        }
      })
    },

  }// END APP

})()