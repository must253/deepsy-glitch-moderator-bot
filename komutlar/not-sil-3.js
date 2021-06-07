const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

const not = await database.fetch(message.author.id);
if(!not) return message.channel.send('Bir hata oluştu:\nDaha önce hiç not almamışsın.')
if(!not.üç) return message.channel.send("Zaten **Not 3**'e daha önce hiç not kaydetmemişsin.");

await database.set(message.author.id, {
bir: not ? not.bir : false ? not.bir : false,
iki: not ? not.iki : false ? not.iki : false,
üç: false,
dört: not ? not.dört : false ? not.dört : false,
beş: not ? not.beş : false ? not.beş : false,
});
return message.channel.send("Başarıyla **Not 3**'de kayıtlı notun silindi.");

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'not-sil3'
};