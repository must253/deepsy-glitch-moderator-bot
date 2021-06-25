const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  let muterol = db.fetch(`muterol_${message.guild.id}`)

if (!muterol) return message.channel.send(` Mute Rolü Ayarlanmamış! Ayarlamak İçin: \`.mute-rol @rol\``)
  
let yetkili = db.fetch(`muteyetkilirol_${message.guild.id}`)

if(!message.member.roles.cache.has(yetkili)) return message.channel.send(` Bu Komudu Kullanabilmen İçin <@&${yetkili}> Rolüne Sahip Olmalısın!`)
  let kullanıcı = message.mentions.members.first()
if(!kullanıcı) return message.channel.send(` Mutesini Kaldıracağın Kullanıcıyı Belirt!`)
  
if(message.member.roles.cache.has(muterol)) { message.channel.send(`Bi akıllı sensin dimi mute hammer rolünü aldım`)
                                             kullanıcı.roles.remove(yetkili)
  }



  
kullanıcı.roles.remove(muterol)
  
  
  const mute_kaldırma = new discord.MessageEmbed()
.setDescription(`${kullanıcı} İsimli Kullanıcının, ${message.author} Tarafından Mutesi Kaldırıldı! `)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')
  
  message.channel.send(`${kullanıcı} İsimli Kullanıcının, ${message.author} Tarafından Mutesi Kaldırıldı! `)


var must = "842418436054843438"
    if(!must) return;
  client.channels.cache.get(must).send(mute_kaldırma)

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'unmute'
}
