  
const Discord = require('discord.js');

const db = require("quick.db")

const ayarlar = require("../ayarlar.json")

exports.run = async (client, msg, args) => {

  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(new Discord.MessageEmbed()

.setTitle(`Uyarı`)

.setDescription(`:exclamation:  Bu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!`))

  

  

  if(args[0] == "sıfırla" || args[0] == "reset") {

    db.set(`seviyesınır${msg.guild.id}`, 250)

    return msg.channel.send(`:thumbsup:  Seviye-Sınır Başarıyla Sıfırlandı! Varsayılan: \`500\``)

 }

  let sayı = args[0]

  if(!sayı) return msg.channel.send(`:exclamation:  Seviye bir sayı olmalı!`)

  if(sayı < 100) return msg.channel.send(`:exclamation:  En Az 100'e Kadar Bir Sayı Girebilirsiniz!`)

  if(sayı > 500) return msg.channel.send(`:exclamation:  En Fazla 500'e Kadar Bir Sayı Girebilirsiniz!`)

  db.set(`seviyesınır${msg.guild.id}`, args[0])

  return msg.channel.send(":thumbsup:  Başarıyla Seviye Sınırını \`" + args[0] + "\` Olarak Ayarladınız!")

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'seviye-sınır'

}
