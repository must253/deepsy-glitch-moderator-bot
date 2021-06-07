const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;
const db = require('quick.db')

exports.run = async(client, message, args) => {

  let yetkili = "842418432926679068"

if(!message.member.roles.cache.has(yetkili)) return message.channel.send(` Bu Komudu Kullanabilmen İçin <@&${yetkili}> Rolüne Sahip Olmalısın!`)

  let mutelirolu = db.fetch(`muterol_${message.guild.id}`)

if (!mutelirolu) return message.channel.send(` Mute Rolü Ayarlanmamış! Ayarlamak İçin: \`dr!mute-rol @rol\``)

  let mutekisi = message.mentions.members.first()
  if(!mutekisi) return message.reply(`:warning: Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  if(mutekisi.hasPermission("MANAGE_MESSAGES")) return message.reply(`:warning: Yetkili bir kişiyi muteleyemem! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`:warning: Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)
  let sebep = args.slice(1).join(' ')
if (!sebep) return message.channel.send(`Muteleme Sebebini Belirtmelisin!`)

  mutekisi.roles.add(mutelirolu)
  var must = "842418436054843438"
    if(!must) return;
  client.channels.cache.get(must).send(`<@${mutekisi.id}> kullanıcısı ${args[1]} süresi boyunca mutelendi!`);

  setTimeout(function(){
    mutekisi.roles.remove(mutelirolu);
    var must = "842418436054843438"
    if(!must) return;
   client.channels.cache.get(must).send(`<@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`);
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "sürelimute",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
    usage: "sürelimute <@kullanıcı> <1sn/1dk/1sa/1g>"
  };