const Discord = require('discord.js');
const db = require('quick.db') 


exports.run = async (message) => {
  
  const discord = require('discord.js'); // Define / Require the discord.js module.
const client = new discord.Client(); // Creating a discord.js client instance (constructor).
const disbut = require('discord-buttons')(client);
  
  let btn = new disbut.MessageButton()
    .setEmoji('785062885952192512')
    .setStyle('grey')
    .setID('testid');
    
let btn2 = new disbut.MessageButton()
    .setLabel('Discord buttos!')
    .setStyle('url')
    .setURL('https://npmjs.com/package/discord-buttons');
    
let row = new disbut.MessageActionRow()
    .addComponent(btn)
    .addComponent(btn);

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