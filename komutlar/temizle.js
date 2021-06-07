
const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async(client, message, args) => {
  
         const temizlemesajembed1 = new Discord.MessageEmbed()
.setDescription('Temizlemek istediğin mesaj sayısını gir! ')
.setTimestamp()
.setFooter('WoLvEs')
.setColor(0x36393E)
 
                const temizlemesajembed2 = new Discord.MessageEmbed()
.setDescription('Sayının içinde harf var!')
.setTimestamp()
.setFooter('WoLvEs')
.setColor(0x36393E)
                
                       const temizlemesajembed3 = new Discord.MessageEmbed()
.setDescription('`14` günden önceki mesajları silemem!')
.setTimestamp()
.setFooter('WoLvEs')
.setColor(0x36393E)
                       
                              const temizlemesajembed4 = new Discord.MessageEmbed()
.setDescription(`${args[0]} adet mesaj başarıyla silindi!`)
.setTimestamp()
.setFooter('WoLvEs')
.setColor(0x36393E)
                              
 if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(`Bu komutu kullanailmek için \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`);
  var selambenxsrow = args.slice(0).join(' ')
  
  if (!selambenxsrow) return message.channel.send(temizlemesajembed1)
  if (isNaN(selambenxsrow)) return message.channel.send(temizlemesajembed2)
  let fetched = await message.channel.messages.fetch({limit: args[0]})
  
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send(temizlemesajembed3))
  
  message.channel.send(temizlemesajembed4).then(msg => msg.delete({ timeout: 8000, reason: 'mesaj silme' }))
  
	message.delete();
    
}
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil"],
  permLevel: 0
};
exports.help = {
  name: 'temizle',
};
