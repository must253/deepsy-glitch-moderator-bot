const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {

  let yetkili = '842418432926679069'

  if(!message.member.roles.cache.has(yetkili)) return message.channel.send(`Bu Komudu Kullanabilmen İçin Gerekli Yetkin Yok!!`)
let kanal = '850290203327332372'
let rol = '842418432980549637'
let unregister = '842418432905183250'
let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!kanal) return message.reply('Bu sunucu için jail sistemi açık deil ! Açmak için ; `v!jail-ayarla`')
if(!kullanıcı) return message.reply('Bir Kullanıcı Belirt !')
let logkanal = message.guild.channels.cache.get(kanal)
let jailrol = message.guild.roles.cache.get(rol)
let embed = new Discord.MessageEmbed()
.setTitle('Jail Log')
.setColor("RANDOM")
.addField(`Yetkili`, `${message.author}`)
.addField(`Kullanıcı`, `${kullanıcı}`)
.addField(`Kullanıcıya şu rol verildi `, `**<@&${unregister}>**`)
.setFooter(`Bir kullanıcın jail cezası kaldırıldı !`)
.setTimestamp()
logkanal.send(embed)
message.guild.member(kullanıcı).roles.remove(jailrol)
  message.guild.member(kullanıcı).roles.add(unregister)
message.channel.send('👍 **Jail kaldırma** işlemi başarılı !')
}
exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unjail',
  description: '',
  usage: ''
};