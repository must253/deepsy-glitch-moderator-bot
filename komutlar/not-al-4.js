const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

if(!args[0]) return message.channel.send('Bir hata oluştu:\nAlınacak notu girmedin.');

const not = await database.fetch(message.author.id);
await database.set(message.author.id, {
bir: not ? not.bir : false ? not.bir : false,
iki: not ? not.iki : false ? not.iki : false,
üç: not ? not.üç : false ? not.üç : false,
dört: args.slice(0).join(' '),
beş: not ? not.beş : false ? not.beş : false,
});
return message.channel.send("Başarıyla **Not 4**'e notun kaydedildi.");

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'not-al4'
};