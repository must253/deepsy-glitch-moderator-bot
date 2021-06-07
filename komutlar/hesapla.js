const discord = require('discord.js');
const  db  = require("quick.db");

exports.run = async(client, message, args) => {
  
  
const must= require("moment");
  
must.locale("tr")
  
  const embed = new discord.MessageEmbed()
  .setAuthor(message.author.tag)
  .addField(`ID`, message.member.id, true)
  .addField(`Discord İsmi`,`${message.author.username}`,true)
  .setColor('RANDOM')
  .setThumbnail(message.author.displayAvatarURL  ({dynamic:true}))
  .setDescription(`<@${message.member.id}> Hesabın \`${must(message.author.createdAt).format("DD MMMM YYYY")}\` Yaklaşık olarak \`${must(message.author.createdAt).fromNow()}\`  oluşturulmuş. Sunucuya katılma tarihin \`${must(message.member.joinedTimestamp).format("DD MMMM YYYY")} ${must(message.member.joinedTimestamp).format('h:mm:ss')}\` tarihinde yaklaşık \`${must(message.member.joinedTimestamp).fromNow()}\`  sunucuya katılmışsın`)
  
  
  
  
message.channel.send(embed)
  
  
  };
exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ['hesapla'], 
    permLevel: 0
  };
  
  exports.help = {
    name: 'hesapla',
    description: 'taslak', 
    usage: 'hesapla'
  };