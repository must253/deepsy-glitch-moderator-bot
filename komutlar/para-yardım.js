
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **WoLvEs Bot Moderasyon Menüsüne Hoşgeldiniz** `)
        .setDescription(` 
        Oyun Menümüz ${prefix}para-yardım
▬▬▬▬▬▬▬▬ \`\`\Para Oyunu Komutları\`\`\ ▬▬▬▬▬▬▬▬
**»  ${prefix}profil __Para Profilinizi Görürsünüz__**
**»  ${prefix}market __Marketi Görürsünüz__**
**»  ${prefix}günlük __Günlük Paranızı Alırsınız__**
**»  ${prefix}soygun __Etiketlediğiniz Kişiyi Soyarsınız__**
`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» WoLvEs Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=781242601671884820&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BqpNJFKBSu) **|** [Oy Linki]() `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['para-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'para-yardım',
  description: 'para menüsünü gösterir',
  usage: 'para-yardım'
};
