const Discord = require('discord.js');
const db = require('quick.db') 
exports.run = async (client, message, args) => {

  
  let user = message.author   

  
  let sebep = args.slice(0).join(' ') || "Belirtilmemiş."
  
  if (!sebep) return message.channel.send(`Bir sebep yazmalısın.`) 
  
  let member = message.mentions.members.first()
  
  
  let isim = args.slice(1).join(" ")
  
    
  db.set(`afk_${user.id}`, sebep) 
  const b = message.member.displayName
message.member.setNickname(`[AFK] `  + b)
  
  message.reply(`Başarıyla AFK moduna girdin! Bir şey yazana kadar AFK sayılacaksın!`) }; 


exports.conf = { 
enabled: true,
guildOnly: true, 
aliases: ["afk"], 
permLevel: 0 
}

exports.help = {
name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}