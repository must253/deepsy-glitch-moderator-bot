
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
.setDescription(`${ client.user.username}`)
  .addField(`Bot Sahibi`, `<@638324859818213380>`, true)
    .addField(`Bot Geliştiricisi`, `<@638324859818213380>`, true)
    .addField("Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("Sunucu Sayısı", `${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("Toplam Kullanıcı Sayısı", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("Kanal Sayısı", `${client.channels.cache.size.toLocaleString()}`, true)
  .addField(`Ne Kadar Süredir Aktif`, `${duration}`, true)
  .addField("Ping", `${client.ws.ping}`, true)
  .addField("Discord.js Sürümü", `${Discord.version}`, true)
  message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'i'
};
