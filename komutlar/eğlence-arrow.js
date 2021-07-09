
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** `)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Arrow Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['arrow','arrow-yazı','arrow yazı'],
    permLevel: 0
}

exports.help = {
    name: 'arrow',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'arrow <yazı>'
}
