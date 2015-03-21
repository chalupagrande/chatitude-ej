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
          App.pubsub.emit('change', dataChats);
        },
        error: function(){
          console.log('Failed to recieve messages!')
        }
      })
    },



    send: function(message){
      $.ajax({
        url: 'http://chat.api.mks.io/chats',
        type: 'POST',
        data: message,
        success: function (data) {
          var data = JSON.parse(data);
          App.pubsub.emit('change', data)
        },
        error: function(){
          console.log('Failed to send message!')
        }
      })
    },

    returnsChats: function(){
      return chats
    },

  }// END APP

})()