var colors = Npm.require('colors');

Meteor.methods({
  serverlog : function(msg,warn){
    console.log(msg.rainbow);
  }
});

