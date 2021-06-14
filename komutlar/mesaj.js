const Messages = require("discord-messages");



exports.run = function(client, message, args ,msg) { 


const target = message.mentions.users.first() || message.author; // Grab the target.

const user =  Messages.fetch(target.id, message.guild.id); // Selects the target from the database.

if (!user) return message.channel.send("Seems like this user does not any messages so far..."); // If there isnt such user in the database, we send a message in general.

message.channel.send(`> **${target.tag}** currently has ${user.messages} message(s).`); // We show the message(s) count.
  
  
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'mesaj',
  description: 'mustadamdıraq',
  usage: 'mesaj'
};