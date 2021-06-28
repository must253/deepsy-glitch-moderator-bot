const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {

  let yetkili = '842418432926679069'

  if(!message.member.roles.cache.has(yetkili)) return message.channel.send(`Bu Komudu Kullanabilmen İçin Gerekli Yetkin Yok!!`)
let kanal = '850290203327332372'
let rol = '842418432980549637'
let kullanıcı = message.mentions.users.first() || message.guild.members.cache.get(args[0])
let sebep = args.slice(1).join(' ') || "Belirtilmemiş.."
if(!kanal) return message.reply('Bu sunucu için jail sistemi açık deil !')
if(!kullanıcı) return message.reply('Bir Kullanıcı Belirt !')
let logkanal = message.guild.channels.cache.get(kanal)
let jailrol = message.guild.roles.cache.get(rol)
let embed = new Discord.MessageEmbed()
.setTitle('Jail Log')
.setColor("RANDOM")
.addField(`Yetkili`, `${message.author}`)
.addField(`Kullanıcı`, `${kullanıcı}`)
.addField(`Sebep`, `**${sebep}**`)
.setFooter(`Bir kullanıcı jail cezasına çarptırıldı !`)
.setTimestamp()
logkanal.send(embed)
message.guild.members.cache.get(kullanıcı.id).roles.cache.forEach(r => {
  message.guild.members.cache.get(kullanıcı.id).roles.remove(r.id)
})

message.guild.member(kullanıcı).roles.add(jailrol)
message.Must('👍 **Jail atma** işlemi başarılı !')
}

exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'jail',
  description: '',
  usage: ''
};