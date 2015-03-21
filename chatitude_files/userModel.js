// { id message time user}
(function(){ //no JQuery
  
  // var user = [];

  window.User = {

    signin: function(unpw){

      $.ajax({
        url: 'http://chat.api.mks.io/signin',
        type: 'POST',
        data: unpw,
        success: function (apiKey) {
          debugger;
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
           alert('You Have Signed Up successfully')
        },
        error: function(){
          console.log('Failed to signup!')
        }
      })
    },

  }// END User

})()