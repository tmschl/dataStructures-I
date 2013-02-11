var makeStack = function(){
  var data = [];

  var stack = {
    insert: function(element) {
      data[data.length] = element;
    },
    remove: function() {
      var newArray = [];
      var lastElement = data[data.length - 1];
      for(var i = 0; i < data.length - 1; i++){
        newArray[i] = data[i];
      }
      data = newArray;
      return lastElement;
    },
    contains: function(query) {
      for(var i = 0; i < data.length; i++){
        if(data[i] === query) {
          return true;
        }
      }
      return false;
    },
    length: function() {
      return data.length;
    }

  }
  return stack;
}