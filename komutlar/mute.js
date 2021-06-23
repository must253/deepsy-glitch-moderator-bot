
const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let yetkili = db.fetch(`muteyetkilirol_${message.guild.id}`)

if(!message.member.roles.cache.has(yetkili)) return message.channel.send(` Bu Komudu Kullanabilmen İçin Mute Rolüne Sahip Olmalısın!`)

let muterol = db.fetch(`muterol_${message.guild.id}`)

if (!muterol) return message.channel.send(` Mute Rolü Ayarlanmamış! Ayarlamak İçin: \`mute-rol @rol\``)
let kullanıcı = message.mentions.members.first()
if(!kullanıcı) return message.channel.send(` Muteleyeceğin Kullanıcıyı Belirt!`)

let sebep = args.slice(1).join(' ')
if (!sebep) return message.channel.send(`Muteleme Sebebini Belirtmelisin!`)

  
kullanıcı.roles.add(muterol)
  
   const mute_kaldırma = new discord.MessageEmbed()
.setDescription(`${kullanıcı}, ${message.author} Tarafından **${sebep}** Nedeniyle Muteledi!`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')

message.channel.send(`${kullanıcı}, ${message.author} Tarafından **${sebep}** Nedeniyle Muteledi! `)

  
  var must = "842418436054843438"
    if(!must) return;
  client.channels.cache.get(must).send(mute_kaldırma)

}
exports.conf = {
  enabled : false,
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'mute'
}
