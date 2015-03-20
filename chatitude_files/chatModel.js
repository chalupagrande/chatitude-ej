// { id message time user}
(function(){
  
  var chats = [];

  window.Chats = {

    server: 'http://chat.api.mks.io/chats',

    fetch: function(){
      $.ajax({
        url: 'http://chat.api.mks.io/chats',
        type: 'GET',
        success: function (dataChats) {
          chats = dataChats;
          //app.pubsub.emit('change')
          console.log("Got chats:", chats)
        },
        error: function(){
          console.log('Failed to recieve messages!')
        }
      })
    },


    send: function(){
      $.ajax({
        url: 'http://chat.api.mks.io/chats',
        type: 'POST',
        success: function (chats) {
          console.log("Message sent!")
          //app.pubsub.emit('change')
        },
        error: function(){
          console.log('Failed to send message!')
        }
      })
    },

    returnsChats: function(){
      return chats
    }

  }// END APP

})()