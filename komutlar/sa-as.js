
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`Bu Komutu Kullanabilmek İçin \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`);
if(args[0] === 'aç') {
    db.set(`saas_${message.guild.id}`, true)
    message.channel.send(':innocent:  Başarılı Bir Şekilde SA-AS Sistemi `Açıldı!`')
      db.set(`saas_${message.guild.id}`, "acik")
  return
}
if (args[0] === 'kapat') {
  db.delete(`saas_${message.guild.id}`)
message.channel.send(':innocent:  Başarılı Bir Şekilde SA-AS Sistemi `Kapatıldı!`')
      db.set(`saas_${message.guild.id}}`, "kapali")
return
}
  message.channel.send(':x:  Lüten `aç` ya da `kapat` yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'sa-as', 
 description: 'reklam-engel',
 usage: 'sa-as' 
};
