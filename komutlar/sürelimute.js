const discord = require('discord.js')
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;
const db = require('quick.db')

exports.run = async(client, message, args) => {

  let yetkili = "842418432926679068"

if(!message.member.roles.cache.has(yetkili)) return message.channel.send(` Bu Komudu Kullanabilmen İçin <@&${yetkili}> Rolüne Sahip Olmalısın!`)

  let mutelirolu = db.fetch(`muterol_${message.guild.id}`)

if (!mutelirolu) return message.channel.send(` Mute Rolü Ayarlanmamış! Ayarlamak İçin: \`mute-rol @rol\``)

  let mutekisi = message.mentions.members.first()
  if(!mutekisi) return message.reply(`:warning: Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g> <sebep>\``)
  if(mutekisi.hasPermission("MANAGE_MESSAGES")) return message.reply(`:warning: Yetkili bir kişiyi muteleyemem! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g> <sebep>\``)
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`:warning: Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g> <sebep>\``)
  let sebep = args.slice(1).join(' ') || "Belirtilmemiş"

  
  const muteleme = new discord.MessageEmbed()
.setDescription(`<@${mutekisi.id}>, ${message.author} Tarafından **${sebep}** Nedeniyle, ${args[1]} Süresi Boyunca Muteledi!`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')
  
  mutekisi.roles.add(mutelirolu)
  var must = "842418436054843438"
    if(!must) return;
  message.channel.send(`<@${mutekisi.id}> kullanıcısı ${args[1]} süresi boyunca mutelendi!`)
  client.channels.cache.get(must).send(muteleme);

  setTimeout(function(){
    
     const mute_alma = new discord.MessageEmbed()
.setDescription(`<@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')
     
    mutekisi.roles.remove(mutelirolu);
    var must = "842418436054843438"
    if(!must) return;
   client.channels.cache.get(must).send(mute_alma);
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "mute",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
    usage: "mute <@kullanıcı> <1sn/1dk/1sa/1g> <sebep>"
  };