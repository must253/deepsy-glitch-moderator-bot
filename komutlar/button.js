const Discord = require('discord.js');
const db = require('quick.db') 


exports.run = async (message) => {
  
  const disbut = require('discord-buttons')(client); // Requiring discord-buttons and binding it to the initialised client.
const { MessageButton } = require("discord-buttons");
  
  let btn = new MessageButton()
    .setEmoji('785062885952192512')
    .setStyle('grey')
    .setID('testid');
    
    
let row = new disbut.MessageActionRow()
    .addComponent(btn)

message.channel.send(`Wumpus!!!`, { component: row });

}; 


exports.conf = { 
enabled: true,
guildOnly: true, 
aliases: ["button"], 
permLevel: 0 
}

exports.help = {
name: 'button',
  description: "button  sağlar.",
  usage: 'button '
}