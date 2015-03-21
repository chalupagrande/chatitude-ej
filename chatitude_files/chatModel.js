// { id message time user}
(function(){ //no JQuery
  
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
        success: function () {
          App.pubsub.emit('fetchData');
        },
        error: function(){
          console.log('Failed to send message!')
        }
      })
    },

  }// END Chats

})()