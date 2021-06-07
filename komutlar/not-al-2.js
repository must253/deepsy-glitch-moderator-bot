const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

if(!args[0]) return message.channel.send('Bir hata oluştu:\nAlınacak notu girmedin.');

const not = await database.fetch(message.author.id);
await database.set(message.author.id, {
bir: not ? not.bir : false ? not.bir : false,
iki: args.slice(0).join(' '),
üç: not ? not.üç : false ? not.üç : false,
dört: not ? not.dört : false ? not.dört : false,
beş: not ? not.beş : false ? not.beş : false,
});
return message.channel.send("Başarıyla **Not 2**'ye notun kaydedildi.");

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'not-al2'
};