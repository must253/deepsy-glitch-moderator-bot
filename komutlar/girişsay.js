const Discord = require("discord.js");

exports.run = function(client, message, args) { 


let g1 = message.guild.members.cache.filter(
    m => new Date().getTime() - m.joinedTimestamp < 86400000
  ).size;
  let g7 = message.guild.members.cache.filter(
    m => new Date().getTime() - m.joinedTimestamp < 604800000
  ).size;
  let g15 = message.guild.members.cache.filter(
    m => new Date().getTime() - m.joinedTimestamp < 1296000000
  ).size;
  let g30 = message.guild.members.cache.filter(
    m => new Date().getTime() - m.joinedTimestamp < 2592000000
  ).size;

  let cse = new Discord.MessageEmbed()
    .setTitle(message.guild.name + " Kullanıcı İstatistiği")
    .setColor("BLUE")
    .setThumbnail(message.guild.iconURL())
    .addField("24 Saatlik Giriş", "`" + g1 + "`")
    .addField("1 Haftalık Giriş", "`" + g7 + "`")
    .addField("15 Günlük Giriş", "`" + g15 + "`")
    .addField("1 Aylık Giriş", "`" + g30 + "`")
    .setFooter(message.author.tag + " tarafından istendi..")
    .setTimestamp();
  message.channel.send(cse);
};



  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gi","girişsay","giriş-say"],
  permLevel: 0
};

exports.help = {
  name: 'giriş-say',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'gi'
};